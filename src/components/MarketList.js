import React, { useState } from "react";

import CreateListPage from "./compMarketList/CreateListPage";
import Navbar from "./Navbar";

function MarketList() {
  //aqui é instanciado a lista de produtos => futuramente vai mudar para o axios no banco com a lista de produtos
  const [state, setState] = useState({
    Despensa: [
      "Achocolatado",
      "Açúcar",
      "Adoçante",
      "Arroz",
      "Atum",
      "Azeite",
      "Azeitona",
      "Batata palha",
      "Baunilha",
      "Biscoito",
      "Bombom",
      "Café",
      "Caldo",
      "Catchup",
      "Cereal",
      "Chá",
      "Champignon",
      "Chocolate",
      "Chocolate granulado",
      "Coco ralado",
      "Creme de leite",
      "Farinha de mandioca",
      "Farinha de milho",
      "Farinha de rosca",
      "Farinha de trigo",
      "Feijão",
      "Fermento",
      "Gelatina",
      "Geleia",
      "Leite",
      "Leite condensado",
      "Leite de coco",
      "Lentilha",
      "Macarrão",
      "Maionese",
      "Molho",
      "Mostarda",
      "Polpa de tomate",
      "Polvilho",
      "Sagu",
      "Sal",
      "Sal grosso",
      "Salsicha",
      "Sardinha",
      "Sopa",
      "Tempero",
      "Água",
      "Água de coco",
      "Água tônica",
      "Cerveja",
      "Champanhe",
      "Licor",
      "Refrigerante",
      "Rum",
      "Suco",
      "Vinho",
      "Vodca",
      "Uísque",
      "Leite",
      "Biscoitos",
      "Bolos",
      "Doces",
      "Pães",
      "Salgados",
      "Tortas",
      "Fósforo",
      "Velas",
      "Pilhas",
      "Carvão",
    ],

    Freezer: [
      "Carne",
      "Frango",
      "Peixe",
      "Porco",
      "Sorvete",
      "Hambúrguer",
      "Pizza",
    ],

    Geladeira: [
      "Bacon",
      "Chester",
      "Iogurte",
      "Linguiça",
      "Manteiga",
      "Margarina",
      "Mortadela",
      "Nata",
      "Patê",
      "Peito de peru",
      "Presunto",
      "Queijo",
      "Queijo ralado",
      "Requeijão",
      "Ricota",
      "Salame",
      "Ovos",
    ],

    "Frutas e Hortaliças": [
      "Abacate",
      "Abacaxi",
      "Abobrinha",
      "Agrião",
      "Alface",
      "Alho",
      "Banana",
      "Batata",
      "Berinjela",
      "Beterraba",
      "Brócolis",
      "Cebola",
      "Cenoura",
      "Chuchu",
      "Couve",
      "Espinafre",
      "Goiaba",
      "Laranja",
      "Maça",
      "Mamão",
      "Manjericão",
      "Melancia",
      "Melão",
      "Pêra",
      "Pimentão",
      "Repolho",
      "Rúcula",
      "Salsinha",
      "Temperinho verde",
      "Tomate",
      "Uva",
      "Vagem",
      "Vagem",
      "Ervilha",
      "Palmito",
      "Milho",
      "Pepino",
      "Acelga",
    ],

    Higiene: [
      "Absorvente",
      "Acetona",
      "Algodão",
      "Antisséptico bucal",
      "Condicionador",
      "Cortador de unhas",
      "Cotonete",
      "Creme de barbear",
      "Desodorante",
      "Escova de dente",
      "Esmalte",
      "Fio-dental",
      "Fixador",
      "Fraldas",
      "Gel",
      "Hidratante",
      "Lâmina de barbear",
      "Lenço de papel",
      "Lixa",
      "Pente",
      "Pinça",
      "Preservativo",
      "Sabonete",
      "Xampu",
      "Talco",
      "Água sanitária",
      "Álcool",
      "Alvejante",
      "Amaciante",
      "Desinfetante",
      "Detergente",
      "Esponja",
      "Guardanapos",
      "Inseticida",
      "Lava-roupas",
      "Limpa-vidro",
      "Lustra-móveis",
      "Palito de dente",
      "Pano de limpeza",
      "Pano de prato",
      "Papel higiênico",
      "Purificador de ambientes",
      "Sabão em pó",
      "Saco de lixo",
      "Toalha de papel",
      "Vassoura",
    ],
  });

  return (
    //componente CreateListPage é o componente pai da pagina que cria as listas

    <div>
      <Navbar />
      <CreateListPage list={state} setList={setState} />
    </div>
  );
}

export default MarketList;
