node{
	try{
		stage('Checkout'){
			checkout scm
		}
		stage('Check Environment'){
		sh'git --version'
		echo "Branch:${env.BRANCH_NAME}"
		sh'docker -v'
		sh'docker-compose version'
		sh'printenv'
		}
		stage('Deploy Environment'){
			if(env.BRANCH_NAME=="development"){
				"DOCKER_HOST=tcp://127.0.0.1:2376"
				sh'docker-compose up --build'
			}
			
		}
		
	}
	catch(err){
		throw err
	}
}
