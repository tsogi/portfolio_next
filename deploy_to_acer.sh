docker buildx build --platform linux/amd64 -t portfolio:1.1 --output "type=docker,dest=./portfolio.tar" .

scp -i /users/nika/.ssh/id_rsa_ubuntu_server ./portfolio.tar nika@tsogi.net:/var/projects

ssh -i /users/nika/.ssh/id_rsa_ubuntu_server nika@tsogi.net << EOF

    # Navigating to the directory
    cd /var/projects
    
    # Executing the commands
    docker load -i portfolio.tar
    docker-compose rm -f portfolio
    docker-compose up -d portfolio

    # Delete all unused containers, networks, images
    docker system prune -f

EOF