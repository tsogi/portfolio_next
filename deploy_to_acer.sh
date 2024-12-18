npm run build

docker buildx build --platform linux/amd64 -t portfolio:1.1 --output "type=docker,dest=./portfolio.tar" .

scp -i /users/nika/.ssh/id_rsa_ubuntu_server ./portfolio.tar nika@tsogi.net:/var/projects

ssh -i /users/nika/.ssh/id_rsa_ubuntu_server nika@tsogi.net << EOF

    # Navigating to the directory
    cd /var/projects
    

    docker-compose stop portfolio
    docker-compose rm -f portfolio
    docker load -i portfolio.tar
    docker-compose up -d portfolio
    docker system prune -f

EOF