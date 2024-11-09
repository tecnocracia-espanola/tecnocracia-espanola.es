# Project Deployment and Setup Guide for "Tecnocracia Española"
This documment provides helpful commands for server side management and others.

## 1. Directory Listing
To list all files and directories in a folder recursively:
```bash
dir /s /b
```
- **Explanation**: This command lists all files and directories in the specified folder and its subdirectories in a bare format (without any extra details like file size or date).

## 2. File Transfer Using `scp`
To securely copy files from a local directory to a remote server:
```bash
scp -r C:\Users\PC\Desktop\Technocracy\Code\tecnocracia-espanola\dist\tecnocracia-espanola\browser/* root@194.163.170.59:/var/www/tecnocracia-espanola
```
- **Explanation**: `scp` is used to securely copy files or directories between local and remote systems. The `-r` flag is for copying directories recursively.

## 3. Cleaning Up Node Modules
To remove the `node_modules` directory and `package-lock.json`:
```bash
rd /s /q node_modules && del /f /q package-lock.json
```
or:
```bash
rmdir /s /q node_modules
del package-lock.json
npm cache clean --force
```
- **Explanation**: These commands delete the `node_modules` folder and `package-lock.json` to reset the project's dependencies. `npm cache clean --force` clears the npm cache to prevent issues during reinstallation.

## 4. Angular Cache and Development Server
To clean Angular cache and start the development server:
```bash
rm -rf .angular/cache
ng serve
```
- **Explanation**: `rm -rf .angular/cache` deletes Angular's cache, and `ng serve` starts the development server for live reloading during development.

## 5. Nginx Management
To reload, restart, and check the status of Nginx:
```bash
systemctl reload nginx
systemctl restart nginx
systemctl status nginx
```
- **Explanation**: These commands manage the Nginx web server:
  - `systemctl reload nginx`: Reloads the Nginx configuration without dropping connections.
  - `systemctl restart nginx`: Fully restarts Nginx.
  - `systemctl status nginx`: Checks the current status of the Nginx service.

## 6. System Updates and Nginx Installation
To update the system and install Nginx:
```bash
sudo apt update
apt update
apt install nginx
```
- **Explanation**: `apt update` updates the package list, and `apt install nginx` installs the Nginx web server.

## 7. Nginx Configuration for "Tecnocracia Española"
To configure a new Nginx site:
```bash
nano /etc/nginx/sites-available/tecnocracia-espanola
ln -s /etc/nginx/sites-available/tecnocracia-espanola /etc/nginx/sites-enabled/
mkdir -p /var/www/tecnocracia-espanola
nano /etc/nginx/sites-available/tecnocracia-espanola
sudo nginx -t
nginx -t
systemctl reload nginx
```
- **Explanation**:
  - `nano /etc/nginx/sites-available/tecnocracia-espanola`: Opens the Nginx site configuration file for editing.
  - `ln -s ...`: Creates a symbolic link to enable the site.
  - `mkdir -p ...`: Creates the necessary directory structure for the site.
  - `nginx -t`: Tests the Nginx configuration for syntax errors.
  - `systemctl reload nginx`: Reloads Nginx with the updated configuration.

## 8. SSL Certificate Installation with Certbot
To install SSL certificates using Certbot:
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d tecnocracia-espanola.es -d www.tecnocracia-espanola.es
certbot --nginx -d tecnocracia-espanola.es
systemctl reload nginx
```
- **Explanation**: Installs Certbot and configures SSL certificates for your domain using Nginx.

## 9. Log Monitoring
To monitor Nginx error and access logs:
```bash
tail -f /var/log/nginx/tecnocracia-espanola.error.log
tail -f /var/log/nginx/tecnocracia-espanola.access.log
```
- **Explanation**: `tail -f` continuously displays the latest log entries, useful for debugging and monitoring real-time traffic.

<br>
<br>
<br>

### Organized Sections
- **Directory Listing**: Provides a command to list all files and directories.
- **File Transfer**: Details the `scp` command for secure file copying.
- **Node Modules Cleanup**: Instructions for removing and resetting Node.js dependencies.
- **Angular Cache**: Explains how to clear Angular's cache and run the development server.
- **Nginx Management**: Commands to manage the Nginx web server.
- **System Updates**: Guides on updating the system and installing Nginx.
- **Nginx Configuration**: Steps to configure and enable an Nginx site.
- **SSL Certificate**: Instructions for setting up SSL using Certbot.
- **Log Monitoring**: Commands to view and monitor Nginx logs in real time.