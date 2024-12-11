
export const registerFormControllers = [
    {
        name: 'username',
        lebel: 'User Name',
        placeholder: "Enter Your Username",
        componentType: 'input',
        type: "text",
    },
    {
        name: 'email',
        lebel: 'Email',
        placeholder: "Enter Your Email",
        componentType: 'input',
        type: "email",
    },
    {
        name: 'password',
        lebel: 'Password',
        placeholder: "Enter Your Password",
        componentType: 'input',
        type: "password",
    },

]
export const loginFormControllers = [
    {
        name: 'email',
        lebel: 'Email',
        placeholder: "Enter Your Email",
        componentType: 'input',
        type: "email",
    },
    {
        name: 'password',
        lebel: 'Password',
        placeholder: "Enter Your Password",
        componentType: 'input',
        type: "password",
    },

]

export const addProductFromElements = [
    {
        label: "Title",
        name: "title",
        componentType: "input",
        type: "text",
        placeholder: "Enter product title"
    },
    {
        label: "Description",
        name: "description",
        componentType: "textarea",
        placeholder: "Enter product description"
    },
    {
        label: "Category",
        name: "category",
        componentType: "select",
        options:[
            {id: "men", label: "Men"},
            {id: "women", label: "Women"},
            {id: "kids", label: "Kids"},
            {id: "accessories", label: "Accessories"},
            {id: "footwear", label: "Footwear"},
            {id: "electronic", label: "Electronic"},
            {id: "ferniture", label: "Ferniture"},
        ]
    },
    {
        label: "Brand",
        name: "brand",
        componentType: "select",
        options:[
            {id: "nike", label: "Nike"},
            {id: "adidas", label: "Adidas"},
            {id: "puma", label: "Puma"},
            {id: "levi", label: "Levi's"},
            {id: "zara", label: "Zara"},
            {id: "h&m", label: "H&M"},
            {id: "gucci", label: "Gucci"},
            {id: "dior", label: "Dior "},
            {id: "fabindia", label: "Fabindia "},
        ]

    },
    {
        label: "Price",
        name: "price",
        componentType: "input",
        type: "number",
        placeholder: "Enter product price"
    },
    {
        label: "Sale Price",
        name: "saleprice",
        componentType: "input",
        type: "number",
        placeholder: "Enter product price"
    },
    {
        label: "Total Stock",
        name: "totalStock",
        componentType: "input",
        type: "number",
        placeholder: "Enter total stock"
    }
]
