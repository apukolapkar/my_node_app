# my_node_app
Deploying node app using Jenkins and Docker

Step 1: First run the "jenkins_setup.sh" script from command line.

Step 2 : Do the initial setup of Jenkins and make it ready for use.

Step 3 : Add the jenkins user under /etc/sudoers with "jenkins ALL=(ALL)       NOPASSWD: ALL"

Step 4 : Save the changes and reboot the server for changes to take effect.

Step 5: Import the Jenkins jobs using xml files attached in the email.

Step 6 : After Import you should see a single "multi-branch pipeline job" --> Triggering it will check for all the branches under that repository that have changes and a downstream job for respective branch will be triggered.

Step 7 : Once both dev and prod environment jobs are deployed successfully you should be able to see the dev website on "http://localhost:8081" and prod website on : "http://localhost:8082"

Step 8 : Use "docker ps" command to check if 8 containers are running. 4 for each environment.
