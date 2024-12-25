import React from "react";
import Buttons from "@/components/Buttons";
import Image from "next/image";
import InfoBox from "@/components/InfoBox";
import CTACard from "@/components/CTACard";
import PackageCard from "@/components/PackageCard";

const Home = () => {
  return (
    <div className="flex center justify-center align-middle flex-col">
      <section
        id="Hero"
        className="flex flex-col items-center justify-center w-full min-h-[600px] px-8"
      >
        <div className="max-w-[1200px] w-full">
          <div className="flex Hero-content w-full items-center justify-between">
            <div className="flex flex-col max-w-max gap-7 mr-5">
              <h1 className="text-5xl font-black">Erklimme neue Höhen</h1>
              <ul className="text-2xl font-normal">
                <li>Webdesign</li>
                <li>Online Werbung</li>
                <li>Content Creation</li>
                <li>Social Media Managment</li>
              </ul>
              <Buttons color="dark" />
            </div>
            <div className="max-w-max">
              <Image
                src="/placeholder.png"
                alt="background"
                width={400}
                height={400}
                className="h-auto w-250"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="Paragraphs"
        className="flex flex-col items-center justify-center w-full min-h-[600px] px-8 pb-20"
      >
        <div className="max-w-[1200px] w-full">
          <InfoBox
            title={"Entfalte dein Potenzial – Erreiche deine Kunde"}
            description={
              <>
                Du hast ein großartiges Produkt oder eine Dienstleistung, die
                deinen Kunden echten Mehrwert bringt. Aber ohne die richtige
                Sichtbarkeit geht dieses Potenzial verloren. Viele Unternehmen
                setzen darauf, dass ihr Angebot schon irgendwie ankommt, doch
                das ist ein riskanter Weg.
                <br />
                <br />
                <span className="font-bold">
                  Bei Albrecht Marketing wissen wir: Marketingerfolg ist kein
                  Zufall.{" "}
                </span>
                Unser Team versteht, wie man dein Geschäft authentisch und
                effektiv präsentiert – und wie man es dorthin bringt, wo deine
                Kunden sind. Mit bewährten Strategien und einem klaren Plan
                sorgen wir dafür, dass dein Angebot nicht nur sichtbar wird,
                sondern überzeugt.
                <br />
                <br />
                Lass uns dir helfen, den Erfolg zu erreichen, den dein Geschäft
                verdient. Verpasse keine Chancen mehr – sichere dein Einkommen
                und zeige der Welt, was dein Business kann.
              </>
            }
            imageSrc={"/placeholder.png"}
            imageAlt={"placeholder"}
            imagePosition={"left"}
            textDirection={"right"}
          />

          <InfoBox
            title={"Mehr Zeit für das, was wirklich zählt"}
            description={
              <>
                Als Unternehmer kennst du den Druck, alles selbst managen zu
                müssen – von der Produktentwicklung bis zur Kundenpflege.
                Marketing wird da oft zur zusätzlichen Belastung. Genau hier
                kommen wir ins Spiel.
                <br />
                <br />
                <span className="font-bold">
                  Wir bei Albrecht Marketing verstehen deinen Alltag und nehmen
                  dir den Marketingstress ab.{" "}
                </span>
                Unser erfahrenes Team übernimmt die Verantwortung für deine
                Online-Präsenz und entwickelt maßgeschneiderte Strategien, die
                deinem Geschäft Aufmerksamkeit verschaffen. So kannst du dich
                auf das Wesentliche konzentrieren, während wir dafür sorgen,
                dass dein Unternehmen im digitalen Raum wächst.
                <br />
                <br />
                Und das Beste: Du behältst jederzeit den Überblick. Unser
                Dashboard macht alle Fortschritte und Ergebnisse transparent und
                einfach für dich einsehbar – alles an einem Ort, mit minimalem
                Aufwand für dich.
              </>
            }
            imageSrc={"/placeholder.png"}
            imageAlt={"placeholder"}
            imagePosition={"right"}
            textDirection="left"
          />
          <InfoBox
            title={"Erfolg ist kein Zufall – Wir garantieren Ergebnisse"}
            description={
              <>
                Bei Albrecht Marketing sind wir überzeugt von der Qualität
                unserer Arbeit. Unser Ziel ist klar: Dein Erfolg ist unser
                Erfolg. Deshalb bieten wir dir eine{" "}
                <span className="font-bold">Geld-zurück-Garantie </span> – wir
                profitieren nur, wenn auch du profitierst.
                <br />
                <br />
                Unsere Strategien sind darauf ausgerichtet, Ergebnisse zu
                liefern. Ob mehr Besucher, neue Leads oder höhere Umsätze – wir
                stehen für messbaren Mehrwert. Sollte dein Projekt die
                vereinbarten Ziele nicht erreichen, erhältst du dein Geld
                zurück. Mit dieser Garantie gehen wir sicher, dass du bei uns in
                guten Händen bist und volle Kontrolle über deine Investition
                hast.
                <br />
                <br />
                Setze auf Marketing, das Ergebnisse bringt – ohne Risiko.
              </>
            }
            imageSrc={"/placeholder.png"}
            imageAlt={"placeholder"}
            imagePosition={"left"}
            textDirection="right"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        id="Paragraphs"
        className="flex flex-col items-center justify-center w-full"
      >
        <CTACard color="light" />
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="flex flex-col items-center justify-center w-full px-8"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center py-32 gap-5">
          <h2 className="font-black text-5xl">Unsere Pakete</h2>
          <h3 className="text-4xl font-light">
            Für jedes Unternehmen die richtige Lösung.
          </h3>
          <div className="w-full flex flex-row justify-center py-10 gap-10">
            <PackageCard
              title={"Webstart"}
              description={"Der perfekte Einstieg in die Online-Welt."}
              price={"980"}
              list={
                <>
                  <li>Website Entwicklung</li>
                  <li>Domain / Webhosting Einrichtung</li>
                  <li>Erstellung von Inhalten</li>
                  <li>Einrichtung von Social-Media Kanälen</li>
                </>
              }
              monthly={false}
            />
            <PackageCard
              title={"Wachstum"}
              description={"Der perfekte Einstieg in die Online-Welt."}
              price={"600"}
              list={
                <>
                  <li>Website Entwicklung</li>
                  <li>Domain / Webhosting Einrichtung</li>
                  <li>Erstellung von Inhalten</li>
                  <li>Einrichtung von Social-Media Kanälen</li>
                </>
              }
              monthly={true}
            />

            <PackageCard
              title={"Pflege"}
              description={"Der perfekte Einstieg in die Online-Welt."}
              price={"300"}
              list={
                <>
                  <li>Website Entwicklung</li>
                  <li>Domain / Webhosting Einrichtung</li>
                  <li>Erstellung von Inhalten</li>
                  <li>Einrichtung von Social-Media Kanälen</li>
                </>
              }
              monthly={true}
            />
          </div>
        </div>
      </section>

      <section
        id="stepsSection"
        className="flex flex-col items-center justify-center w-full px-8"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center py-32 gap-5">
          <h2 className="font-black text-5xl">Dein Weg zum Erfolg</h2>
        </div>
      </section>
      
      <section
        id="reviewsSection"
        className="flex flex-col items-center justify-center w-full px-8"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center py-32 gap-5">
          <h2 className="font-black text-5xl">Was unsere Kunden über uns sagen</h2>
        </div>
      </section>
      
      <section
        id="FAQ"
        className="flex flex-col items-center justify-center w-full px-8"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center py-32 gap-5">
          <h2 className="font-black text-5xl">FAQ - Häufig Gestellte Fragen</h2>
        </div>
      </section>

    </div>
  );
};

export default Home;
