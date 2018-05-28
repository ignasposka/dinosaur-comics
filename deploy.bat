@echo OFF
powershell -Command "plink -ssh -i D:\Drive\Digital_Ocean_Droplet\id_rsa.ppk -noagent root@46.101.158.45 /root/scripts/make_website_backup.sh dinosaur_comics"
powershell -Command "WinSCP.exe /console /script='D:\\Drive\\dinosaur_comics_generator V2\\prod_to_server.txt'"