# exercise-1

Step1: add new github token as secret 

`oc create secret generic <secret_name> --from-literal=password=<token> --type=kubernetes.io/basic-auth`

Step2: set your build with github token automaticlly

`oc annotate secret <secret_name> 'build.openshift.io/source-secret-match-uri-1=https://github.ibm.com/*'`

Step3: link secret to your project SA

`oc secrets link builder <secret_name>`

Step4: use s2i build from your git repo (demo is nodejs, you can use you are good at language)

Step5: show your app from website (demo: Hello OCP-10)
