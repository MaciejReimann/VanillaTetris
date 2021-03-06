// Tetromino defined as an object with name property
// and their 4 squares' center points later referred 
// to as pivot;

module.exports = [
    {
        name: "I_type",
        colors: ["black", "cyan"],
        centers: [
            { x: -1.5, y:  0.5 },
            { x: -0.5, y:  0.5 },
            { x:  0.5, y:  0.5 },
            { x:  1.5, y:  0.5 }
        ]
    },
    {
        name: "J_type",
        colors: ["black", "blue"],
        centers: [
            { x: -1.5, y: -0.5 },
            { x: -0.5, y: -0.5 },
            { x:  0.5, y: -0.5 },
            { x:  0.5, y:  0.5 }
        ]
    },
    {
        name: "L_type",
        colors: ["black", "orange"],
        centers: [
            { x: -0.5, y:  0.5 },
            { x: -0.5, y: -0.5 },
            { x:  0.5, y: -0.5 },
            { x:  1.5, y: -0.5 }
        ]
    },
    {
        name: "O_type",
        colors: ["black", "yellow"],
        centers: [
            { x: -0.5, y: -0.5 },
            { x:  0.5, y: -0.5 },
            { x:  0.5, y:  0.5 },
            { x: -0.5, y:  0.5 }
        ]
    },
    {
        name: "S_type",
        colors: ["black", "green"],
        centers: [
            { x: -0.5, y:  0.5 },
            { x:  0.5, y:  0.5 },
            { x:  0.5, y: -0.5 },
            { x:  1.5, y: -0.5 }
        ]
    },
    {
        name: "T_type",
        colors: ["black", "magenta"],
        centers: [
            { x: -0.5, y: -0.5 },
            { x:  0.5, y: -0.5 },
            { x:  1.5, y: -0.5 },
            { x:  0.5, y:  0.5 }
        ]
    },
    {
        name: "T_type",
        colors: ["black", "red"],
        centers: [
            { x: -0.5, y: -0.5 },
            { x:  0.5, y: -0.5 },
            { x:  0.5, y:  0.5 },
            { x:  1.5, y:  0.5 }
        ]
    }
];