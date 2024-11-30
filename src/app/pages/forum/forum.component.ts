import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from '../../services/tools.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ForumEntry {
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentsModule, FormsModule],
  encapsulation: ViewEncapsulation.None
})
export class ForumComponent implements OnInit, AfterViewInit {
  entries: any[] = [];
  newEntryText: any;
  maxEntries: number = 100;
  // jsonFilePath: string = 'assets/forumData.json';
  jsonFilePath: string = '/api/forumEntries';

  constructor(private toolsService: ToolsService, private http: HttpClient) { }

  ngAfterViewInit(): void {
    const savedEntries = localStorage.getItem('forumEntries');
    this.entries = savedEntries ? JSON.parse(savedEntries) : [];
  }

  ngOnInit() {
    this.loadEntries();
    const savedEntries = localStorage.getItem('forumEntries');
    this.entries = savedEntries ? JSON.parse(savedEntries) : [];
  }


  loadEntries(): void {
    this.toolsService.get(this.jsonFilePath).subscribe(
      (data: ForumEntry[]) => {
        this.entries = data || [];
      },
      (error) => {
        console.error('Failed to load entries', error);
      }
    );
  }

  addEntry(): void {
    const newEntry: ForumEntry = {
      text: this.newEntryText,
      timestamp: new Date().toISOString(),
    };
  
    this.toolsService.post(this.jsonFilePath, newEntry).subscribe(
      (entry: ForumEntry) => {
        this.entries.unshift(entry); // Use unshift instead of push
        this.newEntryText = '';
      },
      (error) => {
        console.error('Failed to save entry', error);
      }
    );
  }

  deleteEntry(id: number): void {
    const deleteUrl = `${this.jsonFilePath}/${id}`;
    this.toolsService.delete(deleteUrl).subscribe(
      () => {
        this.entries = this.entries.filter(entry => entry.id !== id);
      },
      (error) => {
        console.error('Failed to delete entry', error);
      }
    );
  }

  saveEntries(): void {
    localStorage.setItem('forumEntries', JSON.stringify(this.entries));
  }

}
