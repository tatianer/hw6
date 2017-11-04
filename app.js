let userFirstName ;

do {
    userFirstName  = prompt('Введите свою фамилию' , "Недабой");
} while (userFirstName === "");


let  userLastName;
do {
    userLastName = prompt('Введите свое имя ' , "Татьяна") ;
} while (userLastName === "");

let    userPatronymic ;
do {
    userPatronymic = prompt('Введите свое отчество' , "Дмитриевна") ;
} while (userPatronymic === "");

let userFullName = userFirstName + " " + userLastName + " " + userPatronymic ,
    userYear ;
do {
    userYear = Number(prompt('Введите год рождения' , "1996")) ;
} while (userYear === "");

let userMonth ;
do {
    userMonth = prompt('Введите месяц рождения' , "сентября") ;
} while (userMonth === "" );

let  userDate ;
do {
    userDate = Number(prompt('Введите дату рождения' , "29")) ;
} while ( userDate > 31 && userDate !== null );
let  userFullDate = userDate + " " + userMonth + " " + userYear ,
    country;
do {
    country  = prompt('Введите свою страну' , "Беларусь");
} while (country === "");

let userTypeOfSettlement = +prompt('Укажите тип населённого пункта:1 –Город, 2 –Село,3 -Деревня', '') ,
    city ,
    street ,
    house ,
    locality;


switch (userTypeOfSettlement) {
    case 1:
        city  = prompt('Введите ваш город' , "Минск");
        street  = prompt('Введите вашу улицу' , "Неманская");
        house  = prompt('Введите ваш дом' , "90");
        locality = country + ', г. ' + city + ', ул. ' + street + ', д. ' + house;
        break;

    case 2:
        city  = prompt('Введите вашу деревню' , "Рассвет");
        street  = prompt('Введите вашу улицу' , "Центральная");
        house  = prompt('Введите ваш дом' , "28");
        locality = country + ', д. ' + city + ', ул. ' + street + ', д. ' + house;
        break;

    case 3:
        city  = prompt('Введите ваше село' , "Новое село");
        street  = prompt('Введите вашу улицу' , "Речная");
        house  = prompt('Введите ваш дом' , "3");
        locality = country + ', с. ' + city + ', ул. ' + street + ', д. ' + house;
        break;
}

let gender= prompt("Введите ваш пол муж / жен " , "жен") ,
    pensionAge = 2017 - userYear ,
    pension;

if ((pensionAge >= 60) &&  (gender === 'муж')) {
    pension = 'да' ;
    displayInfo(userFullName , userFullDate , gender , locality , pension) ;
} else if ((pensionAge < 60 ) && (gender === 'муж')) {
    pension = 'нет' ;
    displayInfo(userFullName , userFullDate , gender , locality , pension) ;
} else if ((pensionAge < 55 ) && (gender === 'жен')) {
    pension = 'нет' ;
    displayInfo(userFullName , userFullDate , gender , locality , pension) ;
} else if ((pensionAge >= 55) &&  (gender === 'жен')) {
    pension = 'да' ;
    displayInfo(userFullName , userFullDate , gender , locality , pension) ;
}

function displayInfo(userFullName , userFullDate , gender , locality , pension) {
    alert(`
    ФИО: ${userFullName}
    Дата рождения: ${userFullDate}
    Адрес: ${locality} 
    Пол: ${gender}  
    На пенсии: ${pension}    
`);
}


