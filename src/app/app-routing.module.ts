import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { WebInfoComponent } from './pages/system/web-info/web-info.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { ElectionManagementComponent } from './pages/election-management/election-management.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { ForumComponent } from './pages/forum/forum.component';

// New components
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { TransparencyStatementComponent } from './pages/transparency-statement/transparency-statement.component';
import { ParticipationTermsComponent } from './pages/participation-terms/participation-terms.component';
import { ModificationClauseComponent } from './pages/modification-clause/modification-clause.component';
import { PoliticalStudiesComponent } from './pages/political-studies/political-studies.component';

export const routes: Routes = [
  // Main sections
  { path: 'home', component: HomeComponent },
  { path: 'election-management', component: ElectionManagementComponent },
  { path: 'chronology', component: ChronologyComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'web-info', component: WebInfoComponent },
  { path: 'examples', component: ExamplesComponent },

  // Legal information
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'transparency-statement', component: TransparencyStatementComponent },
  { path: 'participation-terms', component: ParticipationTermsComponent },
  { path: 'modification-clause', component: ModificationClauseComponent },
  { path: 'political-studies', component: PoliticalStudiesComponent },

  // Default routes
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
