import { Label } from "@mui/icons-material";

export const color = [
    "white",
    "Black",
    "Red",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value: "blue", label: "Blue"},
            {value: "green", label: "Green"},
            {value: "purple", label: "Purple"},
            {value: "yellow", label: "Yellow"},
            {value: "brown", label: "Brown"},
            {value: "red", label: "Red"},
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S', checked: false },
            { value: 'M', label: 'M', checked: false },
            { value: 'L', label: 'L', checked: false },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "0-159", label: "$0 to $159"},
            {value: "159-359", label: "$159 to $359"},
            {value: "359-559", label: "$359 to $559"},
            {value: "559-759", label: "$559 to $759"},
            {value: "759-999", label: "$759 to $999"},
        ]
    },
    {
        id: "disccount",
        name: "DISCOUNT RANGE",
        options: [
            {value: "10", label: "10% trở lên"},
            {value: "30", label: "30% trở lên"},
            {value: "50", label: "50% trở lên"},
            {value: "70", label: "70% trở lên"},
            {value: "90", label: "90% trở lên"},
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out of Stock"},
        ]
    }

]