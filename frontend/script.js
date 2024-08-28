const products_html = document.getElementById("products");

products_json = [
	{
		name: "Salade César",
		price: "14.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Salade du Chef",
		price: "12.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Planche mixte végétarienne",
		price: "12.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tbilissi",
		price: "11.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Gebjalia",
		price: "8.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Petite planche",
		price: "5.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Portion de frite",
		price: "3.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Notre planche signature",
		price: "35.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Khinkali",
		price: "12.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Khatchapuri",
		price: "13.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Ostri",
		price: "16.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Mkhliani",
		price: "8.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Lobio",
		price: "10.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Mcvadi",
		price: "18.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Soko",
		price: "11.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Pavé de saumon",
		price: "16.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tolma",
		price: "11.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tchkmeruli",
		price: "12.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Kebab",
		price: "17.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Gâteau au miel",
		price: "4.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tartelette",
		price: "4.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tiramisu Café",
		price: "4.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Roulé à la meringue",
		price: "6.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Le Gourmand",
		price: "4.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tarte aux fruits",
		price: "6.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Glace Maison Vanille",
		price: "2.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Coca Cola Original / Zéro /Cherry",
		price: "3.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Perrier",
		price: "3.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Jus de fruit",
		price: "4.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Limonade maison",
		price: "5.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Eau plate",
		price: "2.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Bière blonde ou ombrée",
		price: "2.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Whisky Clan Campbell /Ballantine (50ml)",
		price: "4.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Expresso",
		price: "1.80",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Double expresso",
		price: "2.40",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Allongé",
		price: "2.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Latté",
		price: "2.80",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Thè vert / noir",
		price: "2.50",
		image: "./public/new-year-supra.png",
	},
];

products_json.forEach((product) => {
	products_html.innerHTML += `
          <div class="col">
            <div class="card bg-secondary-subtle text-center" style="width: 18rem">
              <img
                src=${product.image}
                class="card-img-top"
                alt="${product.name}"
              />
              <div class="card-body">
                <h4 class="card-title">${product.name}</h4>
				<h5>${product.price} €</h5>
              </div>
            </div>
          </div>
`;
});
