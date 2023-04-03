
Normalizando dados ( exemplo simplificado abaixo ) para facilitar acesso as informações.

> Restaurante -> Menu -> Seção ( Bebida, Lanche, Porções ...) -> Items ( Saquê, Premium ...) 

```js
const restaurant = new Map([["457",{
  id: 457,
  name: "night club restaurant",
  phone: "(11)95245-2699",
  address: "Metrotech Courtr, Glenshaw, Palau, 6400",
  about:"Reprehenderit quis officia in adipisicing Lorem irure sunt minim adipisicing incididunt duis labore irure in. Officia elit fugiat labore consequat in sit quis sit anim occaecat.",
  latitude: "-12.397169",
  longitude: "174.372354",
  menus: ["1f00e6c6-6c05-4e45-9c19-c22f05ebfb64", "c64be73a-8946-4872-b435-b2754242f9aa"]
}]]);


const menus = new Map([
["1f00e6c6-6c05-4e45-9c19-c22f05ebfb64",  {
  id: "1f00e6c6-6c05-4e45-9c19-c22f05ebfb64",
  index: 0,
  title: "Bebidas",
  status: true,
  restaurantId: "8f82c745-18b8-4a03-9119-23b6b6546da8",
  sections:[
    {
      id: "0efed6b6-8f7b-4c03-befa-a3c5130b7fae",
      title: "Saquê",
      priceCategories: [
        "Dose 50ml",
        "Garrafa"
      ],
      items: [
        {
          id: "2c880435-215f-44d7-9a2a-625a17f05c0c",
          title: "daiginjo",
          prices: [
            72.22,
            128.65
          ]
        },
        {
          id: "efc6b1f5-3da1-49e7-8713-506066ea17f6",
          title: "sint deserunt laboris",
          prices: [
            42.24,
            131.44
          ]
        },
        {
          id: "00647b4f-3060-4147-a483-52f585ce40a2",
          title: "reprehenderit eu",
          prices: [
            103.93,
            137.52
          ]
        },
        {
          id: "901527da-9783-4fbb-bc33-89b5c9a2ac8d",
          title: "culpa qui quis",
          prices: [
            14.98,
            91.82
          ]
        }
      ]
    }
  ]
 }],
["c64be73a-8946-4872-b435-b2754242f9aa",  {
  id: "c64be73a-8946-4872-b435-b2754242f9aa",
  index: 1,
  title: "Petiscos",
  status: true,
  restaurantId: "8f82c745-18b8-4a03-9119-23b6b6546da8",
  sections: [
    {
      id: "70ebecd8-4a2d-4ac0-aa08-e1f0d856d406",
      title: "Tábua de frios",
      priceCategories: [
        
      ],
      items: [
        {
          id: "e48cea22-40b1-4503-90cb-4550a7e14429",
          title: "dolore",
          prices: [
            106.17
          ]
        },
        {
          id: "f94ba2f4-812c-4ecf-9cd5-f5ca22cd9013",
          title: "irure",
          prices: [
            91.96
          ]
        },
        {
          id: "80d670f1-4e4a-4f0d-b055-176ecc7065b3",
          title: "eu exercitation",
          prices: [
            94.24
          ]
        }
      ]
    },
    {
      id: "b3f2bd33-a9c1-4310-8a20-5301ff63624e",
      title: "Para encher o bucho",
      priceCategories: [
        
      ],
      items: [
        {
          id: "ad1dc876-89b7-4f71-bf0d-c498e4b8e1d8",
          title: "dolor",
          prices: [
            69.71
          ]
        },
        {
          id: "380fe67d-2260-46f1-841b-6830141974b4",
          title: "mollit aliqua enim",
          prices: [
            49.27
          ]
        },
        {
          id: "ed4837e9-e023-478e-99d9-2107a72382d1",
          title: "sit",
          prices: [
            18.95
          ]
        },
        {
          id: "73da9b02-be0b-4abd-a2ca-821c8f66461a",
          title: "ipsum deserunt amet",
          prices: [
            22.99
          ]
        },
        {
          id: "fdbbe054-a265-45c6-874d-91a006aeaace",
          title: "velit",
          prices: [
            140.84
          ]
        },
        {
          id: "4e94c312-2cd2-4548-9273-df464c94d3e8",
          title: "culpa amet",
          prices: [
            67.05
          ]
        },
        {
          id: "a30b0ede-77f7-4672-895f-faab94d5b82a",
          title: "fugiat sit pariatur",
          prices: [
            15.15
          ]
        },
        {
          id: "122c370c-d9df-474f-b1d4-91c9f94d98e3",
          title: "adipisicing amet laboris",
          prices: [
            146.41
          ]
        }
      ]
    },
    {
      id: "56073087-cfba-4a21-a1fa-65b584593e80",
      title: "No mini pão francês",
      priceCategories: [
        "1 pessoa",
        "2 pessoas",
        "4 pessoas"
      ],
      items: [
        {
          id: "41aeb98b-0e03-4941-902a-50a5854f7d90",
          title: "incididunt occaecat et",
          prices: [
            41.25,
            130.73,
            89.21
          ]
        },
        {
          id: "b14d135f-5ac9-4e11-bbb9-ac6254b20702",
          title: "ut",
          prices: [
            21.36,
            83.34,
            126.02
          ]
        },
        {
          id: "5ec466ff-7210-48c3-94eb-15843cac8125",
          title: "ipsum aliquip sunt",
          prices: [
            17.24,
            130.53,
            65.4
          ]
        },
        {
          id: "2d9b8ba7-8917-4ac5-bb08-7052af6d3ef8",
          title: "nostrud cillum aute",
          prices: [
            23.97,
            54.73,
            137.97
          ]
        },
        {
          id: "fa6b8eec-31ec-4fbf-a263-128ea70e4552",
          title: "eu in et",
          prices: [
            98.8,
            50.63,
            86.04
          ]
        }
      ]
    },
    {
      id: "d82cad4a-ed69-4662-9090-ac14cb70ef24",
      title: "Fritos na hora",
      priceCategories: [
        
      ],
      items: [
        {
          id: "5dfb3a6c-d5b5-44b4-928b-92f3587ee107",
          title: "cupidatat ut aliquip",
          prices: [
            53.93
          ]
        },
        {
          id: "4231ea5f-f456-4fbc-8ae4-4d7e3a47ba87",
          title: "ipsum aliqua mollit",
          prices: [
            125.96
          ]
        }
      ]
    },
    {
      id: "bef8a09d-b2bc-4e42-a20d-278212f3f0d7",
      title: "Pastéis",
      priceCategories: [
        "1 pessoa",
        "2 pessoas",
        "4 pessoas"
      ],
      items: [
        {
          id: "0cb07f9c-bcf5-469c-8a85-941a869ec5c1",
          title: "duis nulla anim",
          prices: [
            29.5,
            90.38,
            8.48
          ]
        },
        {
          id: "1cba7d0d-b52c-42d3-b680-4ab6bb90a2ae",
          title: "esse culpa",
          prices: [
            129.51,
            103.05,
            39.25
          ]
        },
        {
          id: "11e89c92-ebc7-43cb-9f02-ec1cf351d989",
          title: "esse duis",
          prices: [
            141.4,
            78.98,
            149.24
          ]
        },
        {
          id: "97eae6c1-cd30-4690-af9d-bc04dd70aade",
          title: "dolore",
          prices: [
            52.91,
            128.63,
            76.96
          ]
        },
        {
          id: "a6927534-61db-492f-9578-61f9efd498f0",
          title: "Lorem",
          prices: [
            11.37,
            139.26,
            83.19
          ]
        },
        {
          id: "a35ee953-53b4-441c-945e-2aeea9c3ebf7",
          title: "ipsum eu ad",
          prices: [
            120.15,
            141.49,
            146.87
          ]
        }
      ]
    },
    {
      id: "65363fa6-5417-4618-9bac-2fd9f2604223",
      title: "Espetinho",
      priceCategories: [
        
      ],
      items: [
        {
          id: "1ae5a27d-66cb-49fd-95a0-1cb246d5b315",
          title: "laborum",
          prices: [
            46.41
          ]
        },
        {
          id: "65b68b20-8a6e-4f87-a254-91490b261433",
          title: "consectetur",
          prices: [
            89.48
          ]
        }
      ]
    }
  ]
}]
]); 
```