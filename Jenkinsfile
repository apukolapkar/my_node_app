node{
	try{
		stage('Checkout'){
			checkout scm
		}
		stage('Check Environment'){
		sh'git --version'
		echo "Branch:${env.BRANCH_NAME}"
		sh'docker -v'
		sh'printenv'
		}
		stage('Deploy Environment'){
			if(env.BRANCH_NAME=="development"){
				sh'sudo docker-compose up --build'
			}
			
		}
		
	}
	catch(err){
		throw err
	}
}
