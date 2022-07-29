// Zadanie nr 1 - komunikacja z API - obsługa asynchroniczna
// Prośba o przygotowanie rozwiązania, które odpyta 3 niezależne usługi (API) i wyświetli wynik tych 3
// różnych usług dopiero po ich zakończeniu.
// Usługi należy uruchomić równolegle, czyli nie ma potrzeby wstrzymywania się z uruchomieniem
// drugiej usługi, zanim zakończy się pierwsza usługa.
// Technologia: Javascript
// =======================================


const catFactURL = "https://catfact.ninja/fact";
const dogImgURL = "https://dog.ceo/api/breeds/image/random";
const catImgURL = "https://randomfox.ca/floof/";

const container = document.querySelector('.container');

const getJson = (url) => fetch(url).then(response => response.json());

Promise.all([getJson(catFactURL), getJson(dogImgURL), getJson(catImgURL)])
    .then((response) => {
        const responsesContent = [];
		response.forEach((responseObject) => {
            responsesContent.push(responseObject.fact || responseObject.message || responseObject.image);
        });

        return responsesContent;
    })
    .then((responsesContent) => {
        responsesContent.forEach((content) => {
            if(content.includes("https")) {
                const contentImg = document.createElement('img');
                contentImg.src = content;
                contentImg.classList.add('animal-img');
                container.appendChild(contentImg);
            } else {
                const contentText = document.createElement('p');
                contentText.innerText = content;
                container.appendChild(contentText);
            }
        });
    });


// Zadanie nr 2 - operacje na datach
// Prośba o przygotowanie rozwiązania, które wyświetli bieżącą datę w formacie jak na poniższym
// przykładzie:
// piątek, 29 lipca 2022 12:07
// Technologia: Javascript
// =======================================

const date = new Date();
console.log(new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'short' }).format(date));

// Zadanie nr 3 - Na podstawie podanej listy użytkowników (users) napisz funkcje:
// 1) sortującą alfabetycznie użytkowników po nazwisku
// 2) filtrującą, która zwróci użytkowników, którzy mają powyżej 30 lat
// =======================================

const users = [
	{
		firstName: 'Marek',
		lastName: 'Mąciwoda',
		age: 45
	},
	{
		firstName: 'Jan',
		lastName: 'Markowski',
		age: 61
	},
	{
		firstName: 'Adam',
		lastName: 'Ćma',
		age: 29
	},
	{
		firstName: 'Anna',
		lastName: 'Czarna',
		age: 20
	},
	{
		firstName: 'Ewa',
		lastName: 'Kowalska',
		age: 30
	},
];

const sortUsersByLastName = users.sort((a, b) => {
	const nameA = a.lastName.toLowerCase();
	const nameB = b.lastName.toLowerCase();
	
	return nameA.localeCompare(nameB);
});
console.log(sortUsersByLastName);


const filterUsersByAge = (comparingAge) => {
	return users.filter((el) => el.age > comparingAge);
};
console.log(filterUsersByAge(30));