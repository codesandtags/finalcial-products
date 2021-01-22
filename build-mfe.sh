clear

echo "1. Installing dependencies ...."
echo " "

PROJECTS=( "container" "credit-cards" "saving-accounts" "insurance" "dashboard", "navbar" )

for project in "${PROJECTS[@]}"; 
do
    echo " "
    echo "[ ${project} ] "
    cd $project
    npm install
    cd ..
    echo "[ ${project} : dependencies installed ] ✅"
    echo " "
done