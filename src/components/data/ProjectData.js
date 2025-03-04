const ProjectData = [
  {
    year: 2024,
    title: "BovEco",
    logo: require("../../images/BovEco.png"),
    imgSize: "w-40",
    tagline: "Reducing Methane, One Moo At A Time",
    homeDescription:
      "We genetically engineered microalgae, Chlorella Vulgaris, to deliver and stabilize a phage-derived lytic enzyme called PeiR which specifically targets and lyses the pseudomurein cell walls of methanogens.",
    abstract: 
       "Enteric methane emissions are one of the largest anthropogenic sources of this potent greenhouse gas (GHG). Our solution involves Chlorella vulgaris microalgae engineered to express phage-based lytic enzymes specifically targeting methanogen populations. Not only is microalgae a nutrient-rich potential feed additive, but due to similar genetic engineering processes, this will act as a proof of concept for genetically modified plants expressing these enzymes. Existing cellulose fermentation in the rumen degrades microalgae and plant cell walls, providing a release mechanism for the enzymes. We envision an engineered crop-based solution to be simple to implement, and cost-effective. Existing research shows that some phage-based enzymes are capable of lysing cells in free form. Furthermore, a reduction in certain methanogens can result in a sustained microbiome shift to favour other hydrogen sinks, including reductive acetogenesis.",
    achievements: ["We had fun :)"],
    backgroundColour: "bg-pinene",
    textColour: "text-black",
    wiki: "https://2024.igem.wiki/waterloo/",
  },
  {
    year: 2023,
    title: "Guarden",
    logo: require("../../images/guarden.png"),
    imgSize: "w-40",
    tagline: "An advanced defence against TSWV",
    homeDescription:
      "We engineered a bmRNAi vaccine delivery mechanism to combat TSWV infections in plants as a means of providing a sustainable solution for farmers, advancing biotechnology in agriculture, and ensuring food security by safeguarding crops.",
    abstract: 
      "Guarden treats Tomato Spotted Wilt Virus (TSWV) infections by leveraging genetically engineered Pseudomonas syringae bacteria to continuously deliver immune-inducing RNA interference (RNAi). Namely, our strategy capitalizes on the inherent RNAi pathways within plants to disrupt TSWV gene replication and expression, thus alleviating its effects. Using a T7 RNA Polymerase expression system and Lambda Red knockout design, we developed a scalable solution with modified E. coli as a proof of concept. The project also introduces minicells as a protective RNAi delivery mechanism, providing a promising and environmentally friendly method to enhance plant immunity against TSWV.",
    achievements: [
      "Bronze Medal recipient"
    ],
    backgroundColour: "bg-guarden",
    textColour: "text-blue",
    wiki: "https://2023.igem.wiki/waterloo/",
  },
  {
    year: 2022,
    title: "Pinene Express",
    logo: require("../../images/pinene-express.png"), 
    imgSize: "w-60",
    tagline: "The greener cannabis alternative",
    homeDescription:
      "We utilized bioengineered yeast to generate the primary cannabinoids and select terpenes present in the cannabis plant, extracting pure compounds from the yeast and distributing them to different manufacturers for customizable compound mixing, effectively replicating cannabis plant extract without requiring cultivation or post-processing.",
    abstract:
      "Pinene Express uses bioengineered yeast to produce the main cannabinoids and select terpenes found in the cannabis plant. Pure compounds are extracted from yeast and shipped to various manufacturers where they can mix compounds as needed to mimic cannabis plant extract, eliminating the need for cultivation and post-processing altogether. To develop our proof of concept, our original vision was to construct 4 strains of yeast with quantified production of alpha-pinene, beta-caryophyllene, THC and CBD, respectively. Due to significant delays in our lab progress caused by procurement issues, we were limited to the successful cloning of all genes necessary for alpha-pinene, THC and CBD into yeast, as well as the successful cloning of beta-caryophyllene genes into E. coli.",
    achievements: [
      "Gold Medal recipient"
    ],
    backgroundColour: "bg-pinene",
    textColour: "text-blue",
    wiki: "https://2022.igem.wiki/waterloo/",
  },
  {
    year: 2021,
    title: "NeuroDetech",
    logo: require("../../images/neurodetech.png"),
    imgSize: "w-44",
    tagline: "Reducing the bias in ADHD diagnosis",
    homeDescription:
      "We created a microfluidic assay chip that quantifies the concentration of certain biomarkers and gene markers with a statistically significant correlation to ADHD to aid in its diagnosis and reduce margin of bias.",
    abstract:
      "NeuroDetech is a quantitative tool that aids in the diagnosis of ADHD and reduces the margin of bias by measuring the concentration of certain biomarkers with a statistically significant correlation to ADHD in urine. To do this, we designed a microfluidic assay chip as the physical device, with two types of analytes that we targeted to quantify: biomarkers with detection by a fusion protein, and gene markers with detection by an mRNA-binding CRISPR-Cas system. We also developed an optical detector and application used for signal interpretation and quantification. Due to the nature of neurological disorders, there are many more conditions that, like ADHD, suffer from inherent bias in the diagnosis process, and so we hope that NeuroDetech will provide a general synthetic biology solution to non-invasively and quantitatively assessing the risk of any neurological disorder.",
    achievements: [
      "Silver Medal recipient",
    ],
    backgroundColour: "bg-neurodetech",
    textColour: "text-white",
    wiki: "https://2021.igem.org/Team:Waterloo",
  },
  {
    year: 2020,
    title: "REMINE",
    logo: require("../../images/remine.svg"),
    imgSize: "w-48",
    tagline: "Closing the loop for heavy metal waste",
    homeDescription:
      "We modelled a packed column bioreactor containing metal-binding proteins to remove and recover toxic but valuable heavy metals from electronic manufacturing wastewater.",
    abstract:
      "REMINE is a packed column bioreactor containing metal-binding proteins which remove and recover toxic but valuable heavy metals from electronic manufacturing wastewater. The REMINE system can be customized to target specific metals by increasing the metal affinity of the proteins using molecular dynamics and protein engineering tools. Process engineering methods were used to design the packed column reactor and optimise it to specific waste streams and regulatory constraints. With REMINE, the electronic industry can continue to grow while reducing its impact on our environment and health.",
    achievements: [
      "Top undergraduate team in Manufacturing",
      "Best Wiki nominee",
      "Inclusivity Award nominee",
      "Gold Medal recipient",
    ],
    backgroundColour: "bg-remine",
    textColour: "text-blue",
    wiki: "https://2020.igem.org/Team:Waterloo",
  },
  {
    year: 2019,
    title: "Rooting for Symbiosis",
    logo: require("../../images/rooting.png"),
    imgSize: "w-52",
    tagline: "Engineering herbicide tolerance in rhizobia",
    homeDescription:
      "We minimized the use of nitrogen fertilizers by engineering Bradyrhizobium to have the ability to form root nodules with soybeans in the presence of the herbicide linuron.",
    abstract: "Despite playing an important role in protecting crops, herbicides can negatively impact the rhizosphere by interfering with root nodule formation. Rhizobia are soil bacteria that form beneficial relationships with agriculturally important legumes. These microorganisms form root nodules and fix nitrogen gas into ammonia, which plants need to grow. Farmers using herbicides that interfere with biological nitrogen fixation need to apply more nitrogen fertilizers. The runoff from these fertilizers causes nutrient pollution. Therefore, we aimed to minimize the use of nitrogen fertilizers. To do this, we engineered Bradyrhizobium diazoefficiens USDA110 to have the ability to form root nodules with soybeans in the presence of the herbicide linuron. We hoped to confer herbicide tolerance by giving B. diazoefficiens the ability to biologically transform the herbicide and dampen its toxicity. Because agriculture is a large component of our community, we hope this project can provide constructive synthetic biology solutions that support current agricultural practices.",
    achievements: ["Silver Medal recipient"],
    backgroundColour: "bg-rooting",
    textColour: "text-blue",
    wiki: "https://2019.igem.org/Team:Waterloo",
  },
  {
    year: 2018,
    title: "EcoLight",
    logo: require("../../images/ecolight.jpg"),
    imgSize: "w-52",
    tagline: "Dynamic Optogenetic Control of Co-cultures",
    homeDescription:
      "We dynamically controlled E. coli growth by using optogenetics to regulate the production of MetE, an enzyme essential for bacterial growth.",
    abstract: "Microorganisms exist in complex and diverse communities. This enables a variety of important interactions including co-metabolism and nutrient cycling. Yet, it can be difficult to culture species together in a laboratory setting. Mixed populations are difficult to maintain primarily due to competition: a difference in growth rates often results in one population outcompeting another. Our team aimed to dynamically control E. coli growth by using optogenetics (light-induced gene expression) to regulate the production of MetE, an enzyme essential for bacterial growth. This kind of control could help us overcome a major barrier to maintaining co-cultures: competition between microorganisms. This would open several doors in biotech and research. For instance, metabolic engineering of microbial communities may improve the production of pharmaceuticals, biofuels, and other important materials. Moreover, controllable co-cultures would allow researchers to explore complex interactions between microbes and investigate questions that could not previously be answered due to co-culturing limitations.",
    achievements: ["Silver Medal recipient"],
    backgroundColour: "bg-ecolight",
    textColour: "text-white",
    wiki: "http://2018.igem.org/Team:Waterloo",
  },
  {
    year: 2017,
    title: "Prions Be Lit",
    logo: require("../../images/PrionsBeLit.png"),
    imgSize: "w-48",
    tagline: "Functional Amyloid as a Biological Tool",
    abstract: "Prions are perhaps most famous for their implication in neurodegenerative diseases. However, there are also proteins that bear strong similarities to prions while not being associated with an infectious disease. These proteins have been deemed “functional prions.” In our project, engineered functional prions in Saccharomyces cerevisiae provided a proof of concept for using prions as a tool in synthetic biology to co-localize different proteins. These engineered proteins have prion-like aggregative behaviour, as well as a fluorescent tag. They will be used to test the viability of using engineered prions to bring and keep proteins in close proximity to each other while maintaining their function.",
    achievements: ["We had fun :)"],
    backgroundColour: "bg-prions",
    textColour: "text-white",
    wiki: "http://2017.igem.org/Team:Waterloo",
  },
  {
    year: 2016,
    title: "OFF to priON",
    logo: require("../../images/OffToPrion.png"),
    imgSize: "w-56",
    tagline: "Using stop codon read-through and CRISPR to explore S. cerevisiae prion mechanisms",
    abstract: "Prions, or “zombie proteins,” are infectious agents that lead to a variety of neurodegenerative disorders (NDDs). They sicken cells by aggregating with each other and prevent proper protein folding, leading to cell death from the accumulated damage. We proposed a synthetic biology approach to better study prion propagation in the model organism S. cerevisiae. Our system involved inserting a premature stop codon into a protein open reading frame of interest or into dCas9 to respectively overexpress or knock-down protein levels during a [PSI+] response. We used Hsp104, a chaperone protein in S. cerevisiae, to demonstrate that our set-up phenotypically responds to the stop codon readthrough. This research is useful for continuously observing a phenotypic output during prion propagation in yeast and may have implications for helping to identify protein targets for both prevention and treatment of NDDs in the future.",
    achievements: ["Best Poster winner", "Gold Medal recipient"],
    backgroundColour: "bg-off",
    textColour: "text-white",
    wiki: "http://2016.igem.org/Team:Waterloo",
  },
  {
    year: 2015,
    title: "CRISPieR",
    logo: require("../../images/crispier.png"),
    imgSize: "h-36",
    tagline: "Re-engineering CRISPR-Cas9 with functional applications in eukaryotic systems",
    abstract: "CRISPR-Cas9 is an exciting tool for synthetic biologists because it can target and edit genomes with unprecedented specificity. Our team attempted to re-engineer CRISPR to make it more flexible and easier to use. We made it easy to test different sgRNA designs by adding restriction sites to the sgRNA backbone to allow 20 nucleotide target sequences to be swapped without excessive cloning. Additionally, we’re applying recent research on viable mutations within Cas9’s PAM-interacting domain to design (d)Cas9 variants that bind to novel PAM sites, moving towards the goal of a suite of variants that can bind any desired sequence. We believe our re-engineered CRISPR-Cas9 will give biologists increased ability to optimize targeting in many applications. The application we chose to explore is a proof-of-concept antiviral system defending the model plant Arabidopsis against Cauliflower Mosaic Virus, which would benefit from testing a large number of possible sgRNAs in the viral genome.",
    achievements: ["Best Foundational Advance Project nominee", "Best Software Tool winner", "Best Poster winner", "Gold Medal recipient"],
    backgroundColour: "bg-crispier",
    textColour: "text-white",
    wiki: "http://2015.igem.org/Team:Waterloo",
  },
  {
    year: 2014,
    title: "Staphylocide",
    logo: require("../../images/staphylocide.png"),
    imgSize: "h-36",
    tagline: "Staphylocide: Delivery of an Antibiotic Resistance Gene Silencing Mechanism to a MRSA Population using Bacterial Conjugation",
    abstract: "Methicillin resistant Staphylococcus aureus (or MRSA) is an infection-causing pathogen that poses serious health threats in hospitals and in the community. They are well known for their resistance to all β-lactams due to the expression of the mecA gene from the mec cassette. We proposed to combat this infection by delivering gene-silencing systems CRISPRi and RNAi through a Staphylococcus conjugative plasmid. This will effectively disable the antibiotic resistant phenotype over time so that a β-lactam antibiotic can then be administered to kill the MRSA. As a proof of concept, our gene silencing mechanisms targeted a YFP gene within a Staphylococcus population. We also proposed to improve the efficiency of an existing conjugation plasmid to develop a more effective means of delivery between Staphylococcal organisms.",
    achievements: ["Best Model winner", "Gold Medal recipient"],
    backgroundColour: "bg-staphylocide",
    textColour: "text-white",
    wiki: "http://2014.igem.org/Team:Waterloo",
  },
]

export default ProjectData
