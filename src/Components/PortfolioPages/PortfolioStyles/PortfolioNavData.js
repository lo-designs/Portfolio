const portfolioNavData = [
    {
        id: "northtable",
        label: "North Table",
        url: "/northtable",
        prev: null,
        next: "outtawax",
    },
    {
        id: "outtawax",
        label: "OuttaWax",
        url: "/outtawax",
        prev: null,
        next: "parralily",
    },
    {
        id: "parralily",
        label: "Parralily",
        url: "/parraLily",
        prev: "outtawax",
        next: "petteshounds",
    },
    {
        id: "petteshounds",
        label: "Pettes Hounds",
        url: "/petteshounds",
        prev: "parralily",
        next: "soona",
    },
    {
        id: "soona",
        label: "Soona",
        url: "/soona",
        prev: "petteshounds",
        next: "neurotype",
    },
    {
        id: "neurotype",
        label: "Neurotype",
        url: "/neurotype",
        prev: "soona",
        next: "yha",
    },
    {
        id: "yha",
        label: "YHA",
        url: "/yha",
        prev: "neurotype",
        next: null,
    },
];

export default portfolioNavData;
