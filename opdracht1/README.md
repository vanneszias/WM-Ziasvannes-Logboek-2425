# WM Opdracht 1
Opgave
Je maakt een RESTful API en een eenvoudige html/js/[css] toepassing die er gebruik van maakt.
Je mag daarvoor zeker uitgaan van de API die we in de les hebben gebruikt, maar dat is niet
verplicht.

Je toepassing zal boeken, auteurs en genres beheren beheren. Je zal dus boeken, auteurs en genres kunnen aanmaken / wijzigen en eventueel verwijderen. Boeken kan je ook aan een genre toewijzen of er weer uit verwijderen.

Lijsten met boeken per auteur moet je kunnen tonen.

Een lijst met auteurs moet je kunnen tonen. Bij voorkeur kan je ook op een auteur doorklikken om de details van die auteur en de lijst met de door die auteur geschreven boeken te zien.

* Een auteur heeft een voornaam, familienaam en geboortejaar.
* Een boek heeft een titel, code (ISBN-code) en een omschrijving waarin het boek iets meer uitgebreid voorgesteld wordt (bv 1 of 2 alinea's).

Voorbeelden van boekengenres vind je op https://www.booksinbelgium.be/nl/genres-boeken

Voeg zelf een paar auteurs en boeken toe.
Zorg dat elk boek ook een auteur heeft.
Zorg er voor dat er minstens 1 auteur is die meerdere boeken heeft geschreven.
Zorg aub voor realistische gegevens.


De gegevens moet je ophalen via fetch (async/await, promises, ... dat is je eigen keuze).
Je JS spreekt dus de geschikte PHP endpoints aan en verwerkt de response die je krijgt. De PHP scripts geven data terug in de vorm van JSON.
De nadruk ligt in deze oefening op het werken met PHP en html/JS. De nadruk ligt dus niet op de opmaak van de pagina's, dus als je onder tijdsdruk zit, laat je opmaak tot het laatste.

Tip
Pas het .gitignore bestand aan voor je een commit doet met het bestand waarin je database-credentials staan.
Je wilt dat bestand niet op Github zetten. (https://git-scm.com/docs/gitignore)

Cesuur
De cesuur is waar jouw oplossing minstens aan moet voldoen om een 10/20 te behalen voor deze opdracht.
    Je front-end HTML pagina kan dmv fetch correct communiceren met je API.
    Jouw API en jouw front-end oplossing staan beiden online.
    Je CRUD operaties werken (Create, Retrieve, Update en Delete)
    Je kan je response (zinvol) weergeven in je HTML pagina
    Je toepassing is gebruiksvriendelijk

# Technieken die ik gebruik

- NEXT.js --> backend
- Prisma --> db
- React --> frontend
- TailwindCSS --> CSS

# ToDO:
