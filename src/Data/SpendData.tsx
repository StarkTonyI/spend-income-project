import eat from '../icons/Food.png'
import cafe from '../icons/Cafe.png'
import entertainment from '../icons/Popcorn.png'
import transport from '../icons/Vehicles.png'
import health from '../icons/Healthcare.png'
import pet from '../icons/Pets.png'
import family from '../icons/Family.png'
import question from '../icons/Add.png'
import clothes from '../icons/Shirt.png'

export interface SpendItem {
    id:number,
    name:string,
    summ:string,
    icon:string,
    link:string,
    linkName:string
}


const SpendDataLocal:string | null = localStorage.getItem('data');



const SpendData:SpendItem[] = SpendDataLocal ? JSON.parse(SpendDataLocal) : 
[
    {
        id: 1,
        name: "Eat",
        summ: 0,
        icon: eat,
        link: "https://www.flaticon.com/free-icons/fast-food",
        linkName: "Fast food icons created by Freepik-Flaticon"
    },
    {
        id: 2,
        name: "Cafe",
        summ: 0,
        icon: cafe,
        link: "https://www.flaticon.com/free-icons/cafe",
        linkName: "Cafe icons created by Smashicons-Flaticon"
    },
    {
        id: 3,
        name: "Entertainment",
        summ: 0,
        icon: entertainment,
        link: "https://www.flaticon.com/free-icons/popcorn",
        linkName: "Popcorn icons created by Freepik-Flaticon"
    },
    {
        id: 4,
        name: "Transport",
        summ: 0,
        icon: transport,
        link: "https://www.flaticon.com/free-icons/bus",
        linkName: "Bus icons created by DinosoftLabs-Flaticon"
    },
    {
        id: 5,
        name: "Health",
        summ: 0,
        icon: health,
        link: "https://www.flaticon.com/free-icons/health",
        linkName: "Health icons created by Freepik-Flaticon"
    },
    {
        id: 6,
        name: "Pet",
        summ: 0,
        icon: pet,
        link: "https://www.flaticon.com/free-icons/pets",
        linkName: "Pets icons created by iconixar-Flaticon"
    },
    {
        id: 7,
        name: "Family",
        summ: 0,
        icon: family,
        link: "https://www.flaticon.com/free-icons/family",
        linkName: "Family icons created by Freepik-Flaticon"
    },
    {
        id: 8,
        name: "Clothes",
        summ: 0,
        icon: clothes,
        link:"https://www.flaticon.com/free-icons/clothing",
        linkName:'Clothing icons created by Freepik-Flaticon'
    },
    {
        id: 9,
        name: "Add spend",
        summ: 0,
        icon: question,
        link: "https://www.flaticon.com/free-icons/add-button",
        linkName: "Add icons created by Anggara-Flaticon"
    }
]


export default SpendData