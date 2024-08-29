const entree_html = document.getElementById("entree");
const plats_html = document.getElementById("plats");
const deserts_html = document.getElementById("deserts");
const boissons_html = document.getElementById("boissons");

entree_json = [
	{
		name: "Salade du Chef",
		price: "11.00",
		image: "./public/salade_du_chef.jpg",
	},
	{
		name: 'Salade "Tbilissi"',
		price: "10.00",
		image: "./public/salade_tbilissi.jpg",
	},
	{
		name: "Pkhali",
		price: "10.00",
		image: "./public/pkhali.jpg",
	},
	{
		name: "Fillet de poulet",
		price: "10.00",
		image: "./public/fillet_de_poulet.jpg",
	},
];

plats_json = [
	{
		name: "Tolma",
		price: "13.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Khatchapuri",
		price: "15.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Khatchapuri Adjarulad",
		price: "15.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Mcvadi",
		price: "16.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Kabab",
		price: "15.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tchkmeruli",
		price: "13.00",
		image: "./public/tchqmeruli.jpg",
	},
	{
		name: "Ostri",
		price: "16.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Khinkali",
		price: "12.00",
		image: "./public/new-year-supra.png",
	},
];

deserts_json = [
	{
		name: "Roulé a la fraise",
		price: "5.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Tartelette aux fruits",
		price: "5.00",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Roulé à la meringue",
		price: "5.00",
		image: "./public/new-year-supra.png",
	},
];

boissons_json = [
	{
		name: "Perrier",
		price: "3.50",
		image: "./public/perrier.png",
	},
	{
		name: "Orangina",
		price: "3.50",
		image: "./public/orangina.jpg",
	},
	{
		name: "Jus Multifruits",
		price: "3.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Schweppes (Argumes)",
		price: "3.50",
		image: "./public/schweppes.png",
	},
	{
		name: "Coca-Cola",
		price: "3.50",
		image: "./public/coca_cola.png",
	},
	{
		name: "Jus de fruit",
		price: "3.50",
		image: "./public/new-year-supra.png",
	},
	{
		name: "Pago ace-orange-carotte-citron",
		price: "3.50",
		image: "./public/pago.png",
	},
];
entree_json.forEach((product) => {
	entree_html.innerHTML += `
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

plats_json.forEach((product) => {
	plats_html.innerHTML += `
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

deserts_json.forEach((product) => {
	deserts_html.innerHTML += `
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

boissons_json.forEach((product) => {
	boissons_html.innerHTML += `
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
