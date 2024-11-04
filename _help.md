dir /s /b

scp -r C:\Users\PC\Desktop\Technocracy\Code\tecnocracia-espanola\dist\tecnocracia-espanola\browser/* root@194.163.170.59:/var/www/tecnocracia-espanola

z8FRUP353nasBb

rm -rf .angular/cache
ng serve

systemctl reload nginx
systemctl restart nginx
systemctl status nginx



sudo apt update
apt update
apt install nginx
nano /etc/nginx/sites-available/tecnocracia-espanola
ln -s /etc/nginx/sites-available/tecnocracia-espanola /etc/nginx/sites-enabled/
mkdir -p /var/www/tecnocracia-espanola
nano /etc/nginx/sites-available/tecnocracia-espanola
sudo nginx -t
nginx -t
systemctl reload nginx
apt install certbot python3-certbot-nginx
certbot --nginx -d tecnocracia-espanola.es -d www.tecnocracia-espanola.es
certbot --nginx -d tecnocracia-espanola.es
systemctl reload nginx

 tail -f /var/log/nginx/tecnocracia-espanola.error.log
 tail -f /var/log/nginx/tecnocracia-espanola.access.log