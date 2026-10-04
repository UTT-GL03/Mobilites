# Réduction de l'impact écologique du service numérique de l'opérateur de mobilités troyen
## Choix du sujet

Avec l'essor d'internet et des téléphone portable, nous utilisons quotidiennement des sites internet et applications pour consulter les horaires des différents transports en communs ou encore nous repérer. Compte tenu de nos usages, il nous a donc paru pertinent de choisir ce projet là pour essayer de réduire son impact écologique. Ainsi tout au long de ce semestre, nous analyserons les enjeux liés aux applications de transports en communs et de calcul d'itinéraire afin de proposer une solution plus respectueuse de l'environnement tout en conservant son coeur d'action.

## Utilité sociale

L'application centralise horaires, info trafic, achat de titres et vélos en libre-service. Elle facilite l'accès aux transports pour ceux qui n'ont pas de voiture : jeunes, étudiants, personnes âgées, ménages modestes. Ils accèdent plus simplement aux soins, aux études et aux services. Elle encourage aussi le vélo et les transports en commun, donc l'activité physique et une moindre pollution locale.

Elle relie les différentes offres de l'agglomération : bus, transport à la demande, bus-train, vélos. Elle facilite l'accès à l'emploi, le lien centre-périphérie et l'attractivité du centre-ville.

L'application est gratuite, gérée par un opérateur public, et jamais obligatoire. Le téléphone, le site, les fiches horaires et le point de vente restent disponibles. Ses usages sont souples : horaires pour l'étudiant, itinéraire pour le touriste, Marcel pour le cycliste.

## Effets de la numérisation

Les fiches imprimées constituent la principale solution pour la consultation des horaires de transports en communs. La fabrication du papier qui constitue ces fiches représente 5g de CO2 par feuille A4 de 80g/m² et l'impression sur une de ces feuilles est estimée à 2g de CO2. 
Cet impact n'est qu'une estimation, pour la fabrication du papier, ces chiffres varient en fonction du grammage du papier, de si la feuille est recyclée ou non, de la  distance à laquelle il est produit, de l'impact écologique de l'électricité utilisée.
Il est aussi important de garder en tête que les arbres ne sont presque plus abattus uniquement pour produire du papier, la pâte à papier est majoritairement faite de déchets forestiers sans aucune autre utilité. De plus, plus de 60% de l'énergie thermique utilisée pour faire du papier vient de la biomasse ce qui mitige d'autant plus l'impact environnemental de la production de papier.
Quand à l'impression, ces chiffres peuvent varier en fonction de l'encre utilisée et du procédé d'impression utilisé. 
L'application devra ainsi battre cet impact écologique en sachant qu'un utilisateur peut utiliser plusieurs feuilles et que les feuilles peuvent êtres utilisées par plusieurs personnes. (source: [Docside](https://docside.fr/empreinte-carbone-de-limpression-papier-comprendre-pour-agir/ ))

L'application peut remplacer les tickets papier, les fiches imprimées et les appels, à condition que ces supports diminuent réellement. L'enjeu principal reste de remplacer la voiture par le bus ou le vélo. En revanche, l'application substitue des services déjà présents dans l'agglomération en dupliquant certaines fonctionnalités notamment celles de Karos ou encore Marcel.

Plus de facilité peut entraîner plus de déplacements, ou des trajets à pied remplacés par le bus. Le temps réel pousse aussi à consulter l'appli souvent. Ces effets restent limités face au gain d'un report depuis la voiture.

## Scénarios d'usage et impacts

Nous faisons l'hypothèse qu'un utilisateur va consulter les horaires de bus plusieurs fois dans la journée (par exemple pour se rendre au travail, aller faire du sport, voir des amis etc.). Pour cette raison, nous prendrons en compte dans notre scénario, la consultation consécutive des horaires de deux lignes de bus, afin de pouvoir quantifier les effets positifs du cache.

Après analyse de différents services similaires, comme [TCAT](tcat.fr), [Ile de france mobilités](https://www.iledefrance-mobilites.fr), [CityMapper](https://www.iledefrance-mobilites.fr) ou encore [Google Maps](https://www.google.fr/maps), nous sommes arrivés aux scénarios suivants.

### Scénario 1: "Consulter les horaires de passage d'une ligne de bus"
1. L'utilisateur se rend sur la page "horaires de bus" de l'application grâce à un bouton (donc sans passer par un moteur de recherche). Si nécessaire, il donne son consentement. Puis il consulte les différentes lignes de bus disponibles.
2. Il choisit une ligne de bus et prend connaissance des horaires de passage de cette dernière.
3. Il revient à la page "horaires et plans de bus" et consulte les différentes lignes de bus disponible.
4. Il choisit une autre ligne de bus et prend connaissance des horaires de passage cette dernière.


### Scénario 2 : "Être informé des perturbations du traffic"
1. L'utilisateur se rend sur la page "perturbations" de l'application grâce à un bouton (donc sans passer par un moteur de recherche). Si nécessaire, il donne son consentement. Puis il consulte les différentes lignes de bus disponibles.
2. Il choisit une ligne de bus et prends connaissance des perturbations sur la ligne
3. Il revient à la page "perturbations" et consulte les différentes lignes de bus disponibles
4. Il choisit une autre ligne de bus et prends connaissance des perturbations sur la ligne.

## Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services d'opérateurs de mobilités : TCAT, Île-de-France Mobilités et CityMapper à titre de comparaison.

| Service                             | Score (sur 100) | Classe | Détail des mesures                  |
| ----------------------------------- | --------------- | ------ | ----------------------------------- |
| TCAT                                | 42              | D      | […](Benchmark/tcat.md)              |
| Île-de-France Mobilités             | ...             | ...    | […](Benchmark/idfm.md)              |
| CityMapper (à titre de comparaison) | ...             | ...    | […](Benchmark/citymapper.md)        |

