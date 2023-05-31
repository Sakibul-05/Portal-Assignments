const users = [
    {id: 1, name: "John", age: 18, profession: "developer"},
    {id: 2, name: "Jack", age: 20, profession: "developer"},
    {id: 3, name: "Karen", age: 19, profession: "admin"},

]

const selectTag = document.getElementById("selectTag");  
const showResult = document.getElementById("showResult");

function addUserFunction(){
    // confirm("Do You Want to Add User?")
    const userName = document.getElementById("userName").value.trim();
    const userProfession = document.getElementById("userProfession").value.trim();
    const userAge = document.getElementById("userAge").value.trim();
    
    if(userName==="" || userProfession==="" || userAge===""){
        alert("All fields are required")
    }else{
        users.push({
            id: users[users.length -1].id + 1,
            name: userName,
            profession: userProfession,
            age: userAge
        })
        console.log(users);
    }
}

function filterFunction(){
    const selectedValue = selectTag.value;
    console.log(selectedValue);
    const filteredUsers = users.filter((user)=>{
        return user.profession === selectedValue;
    })
    console.log(filteredUsers);
    showResult.innerHTML = "";
    for(let i=0; i<filteredUsers.length; i++){
        /*
        <div class="result-section" id="container">
                    <div class="number">1</div>
                    <div class="name">Name: <span>John</span></div>
                    <div class="profession">Profession: <span>Developer</span></div>
                    <div class="age">Age: <span>18</span></div>
        </div>
        */
      
       const resultSection = document.createElement("div");
       resultSection.className = "result-section";
       const numberElement = document.createElement("div");
       numberElement.className = "number";
       numberElement.innerText = `${filteredUsers[i].id}`;
       const nameElement = document.createElement("div");
       nameElement.className = "name";
       nameElement.innerHTML = `Name: <span>${filteredUsers[i].name}</span>`;
       const professionElement = document.createElement("div");
       professionElement.className = "profession";
       professionElement.innerHTML = `Profession: <span>${filteredUsers[i].profession}</span>`;
       const ageElement = document.createElement("div");
       ageElement.className = "age";
       ageElement.innerHTML = `Age: <span>${filteredUsers[i].age}</span>`;

       resultSection.append (numberElement);
       resultSection.append (nameElement);
       resultSection.append (professionElement);
       resultSection.append (ageElement);
       showResult.append(resultSection);
       
    }

}
