# dnslookup
Shows Ip address and Family of a website

# Language
Nodejs

# How to use
1) Clone this to your <b>dcim (For Termux)</b> or <b>Documents folder (For Linux)</b>
2) You'd need to edit <a href="https://github.com/TermuxHackz/dnslookup/blob/master/dnslookup.js" target="_blank">dnslookup.js</a> and replace "Enter site here" with the name of the site
Eg: "www.google.com"

# Installation for Termux
```
pkg install node
pkg install npm
npm init -y
termux-setup-storage
cd storage/dcim
git clone https://github.com/TermuxHackz/dnslookup
cd dnslookup
node dnslookup.js
```

# Installation for Linux
```
sudo apt install nodejs
sudo apt install npm
npm init -y
cd Documents
git clone https://github.com/TermuxHackz/dnslookup
cd dnslookup
node dnslookup.js

