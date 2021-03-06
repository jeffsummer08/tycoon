const business = [
    {
        name: "Fast Food",
        icon: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/burger.png?alt=media&token=24acc374-2ff1-440b-9bd0-b79006d0f178",
        income_upgrades: [true, localStorage.getItem("ff_$upgrade1"), localStorage.getItem("ff_$upgrade2"), localStorage.getItem("ff_$upgrade3"), localStorage.getItem("ff_$upgrade4")],
        speed_upgrades: [true, localStorage.getItem("ff_speedUpgrade1"), localStorage.getItem("ff_speedUpgrade2")],
        upgrade_speed: [10,5,1],
        upgrade_$: [1,2,3,5,10],
        manager: localStorage.getItem("ff_manager"),
        price: 0,
        bought: true
    },
    {
        name: "Seafood",
        icon: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/shrimp.png?alt=media&token=58e89328-ed11-4400-84ea-faecb1fdae15",
        income_upgrades: [true, localStorage.getItem("sf_$upgrade1"), localStorage.getItem("sf_$upgrade2"), localStorage.getItem("sf_$upgrade3"), localStorage.getItem("sf_$upgrade4")],
        speed_upgrades: [true, localStorage.getItem("sf_speedUpgrade1"), localStorage.getItem("sf_speedUpgrade2"), localStorage.getItem("sf_speedUpgrade3")],
        upgrade_speed: [50,30,20,10],
        upgrade_$: [5,10,25,50,100],
        manager: localStorage.getItem("sf_manager"),
        price: 1000,
        bought: localStorage.getItem("sf_bought"),
        tycoon_name: "sf_bought"
    }, 
    {
        name: "Bakery",
        icon: "https://firebasestorage.googleapis.com/v0/b/tycoon-e1.appspot.com/o/cake.webp?alt=media&token=f9ee73ac-c655-4c0b-8fec-2848afe91502",
        income_upgrades: [true, localStorage.getItem("bk_$upgrade1"), localStorage.getItem("bk_$upgrade2"),localStorage.getItem("bk_$upgrade3"),localStorage.getItem("bk_$upgrade4")],
        speed_upgrades: [true, localStorage.getItem("bk_speedUpgrade1"), localStorage.getItem("bk_speedUpgrade2")],
        upgrade_speed: [60,30,15],
        upgrade_$: [20,25,50,75,150],
        manager: localStorage.getItem("bk_manager"),
        price: 12000,
        bought: localStorage.getItem("bk_bought"),
        tycoon_name: "bk_bought"
    }
]

export default business