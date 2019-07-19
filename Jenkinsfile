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
				sh'sudo /usr/bin/docker-compose up --build -d &'
			}
			
		}
		
	}
	catch(err){
		throw err
	}
}
