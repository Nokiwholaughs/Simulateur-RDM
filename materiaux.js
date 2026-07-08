// Fichier : materiaux.js
// C'est ici que vous stockez toute la base de données des matériaux.
// Pour ajouter un matériau, copiez simplement une ligne existante et modifiez les valeurs.

const baseDeDonneesMateriaux = {
    // --- LES MÉTAUX ---
    alu6060: { name: "Alu 6060-T6", E: 79500, Re: 140, type: "metal" },
    acier: { name: "Acier Standard", E: 210000, Re: 235, type: "metal" },
    inox316: { name: "Inox 316L", E: 193000, Re: 200, type: "metal" },

    // --- LES BOIS ---
    bois_c24: { name: "Bois Résineux C24", E: 11000, Re: 24, type: "bois" },
    bois_gl24: { name: "Lamellé-Collé GL24", E: 11500, Re: 24, type: "bois" },
    bois_d30: { name: "Bois Dur / Chêne D30", E: 12000, Re: 30, type: "bois" }
    
    // Ajoutez de nouvelles lignes ci-dessus pour rajouter des matériaux !
};