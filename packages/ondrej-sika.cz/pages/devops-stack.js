import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Open source DevOps Stack"
    subheader="DevOps je sada nástrojů a technik, díky kterým budete doručovat novou fukncionalitu a změny k zakazníkům automaticky, rychleji a bezstarostně. DevOps Vám umožní trávit více času vývojem než nasazováním a provozováním a vy se můžete zaměřit na jádro vašeho byznysu. Zavedením DevOps také eliminujete nutnost ručních zásahů a ušetříte náklady na tuto manuální práci a vyhnete se chybám."
    markdown={`
Já používám tyto nástroje jak ve svém DevOps stacku tak u klientů.

- Git - Verzovací systém
- Gitlab - Kolaborativní a DevOps Platforma
- Gitlab CI - Automatizace
- Ansible - Config management
- Docker - Container Engine
- Kubernetes - Container Orchestrator
- Prometheus, Alert Manager, Grafana - Monitoring & Alerting
- Sentry - Error Tracking
- Loki - Sprava logu v Grafane
- Rancher, RKE - On Premise Kubernetes
- Terraform - Infrastructure Management
- Public Cloud: AWS, DigitalOcean, Azure, GCP
- Private Cloud: Proxmox, OpenStack

## Git

Git je moderní verzovaci nástroj, který se stal de facto standardem mezi vývojáři. Používají jej na denní bázy jednotlivci, startupy i korporace. Git vám nabízí jednoduchou kolaboraci na projektu s více lidmi a práci na více částech současně aniž byste si zasahovali do rozdělaných věcí nebo je jinak narušovali.

## Gitlab

Gitlab je kolaborativní platforma pokrývající velkou část životního cyklu DevOps. Primárně jde o server pro hostování Git repozitářů a spolupráci nad kódem. Gitlab také obsahuje velmi dobré CI, Issues management nebo Wiki.

## Gitlab CI

Continuous Integration (zkráceně CI nebo CI/CD) je nástroj, který za Vás automatizuje rutinní úkoly jako je pouštění testů, kvality kódu anebo nasazování. Umožní Vám rychleji začleňovat změny do masteru a rychleji nasazovat. Výhodou Gitlab CI je velmi dobrá podpora Dockeru, můžete velmi jednoduše skládat Docker images anebo pouštět testy v kontejnerech.

## Ansible

Ansible je nástroj na hromadnou správu konfigurací a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení. Nemusíte řešit v jakém stavu je server nebo aplikace ted, Ansible vám zařídí požadovaný výsedek (výhoda deklarativní syntaxe, napřiklad shell script je imperativní - proveď to a to ...). Veškerou konfiguraci máte verzovanou Gitem a nestane se vám, že ztratíte přehled, kde máte co nasazené nebo že vynecháte nějaký důležitý krok. Ansible vám pomůže nasazovat aplikace a spravovat servery rychleji a bezpečněji.

## Docker

Docker je nastroj, který proces vývoje, testování a provozování softwaru velmi zjednodušuje. Provozujte cokoliv a kdekoliv. Už nečekejte na nastavení vašeho serveru nebo na aktualizaci nějaké knihovny. Mějte prostředí jako součást vaší aplikace.

## Kubernetes

Kubernetes jsou dnes nejrozšířenější platformou na hostování Docker kontejnerů a jsou podporovány velkými hráči na trhu (Google, Amazon, Microsoft) skrz Cloud Native Computing Foundation. Kubernetes pro provoz používají všechny velikosti firem, od startupu po korporace.

## Prometheus, Alert Manager, Grafana

Prometheus je moderní monitoringový nástroj a metrics server. Umožňuje sbírat metrická data z vaší aplikace a většiny komponent Váši infrastruktury a nad těmito daty dělat grafy (v Grafaně) a alerty. Prometheus spadá pod CNCF, stejně jako Kubernetes.

## Sentry

Sentry je nástroj na agregování chyb z aplikace. Podporuje všechny možné jazyky od Pythonu po JavaScript v browseru. Sentry dokáže uložit kompletní stack trace, takže následné ladení chyb je o hodně jednodušší.

## Loki

Loki je moderni nastroj, ktery umoznuje centralizovane sbirani a analyzu logu. Loki je od Grafany, takze logy muzete prohlizet primo v Grafane a filtrovat je muzete pomoci LogQL, coz je obdoba PromQL, ktery se pouziva pro praci s metrickymi daty.

## Rancher, RKE

Rancher je nástroj na správu Kubernetes clusteru jak na vlastním hardware, tak i v cloudu (AWS, GCP, DigitalOcean). Rancher Vám umožní jednoduše vytvářet a spravovat Kubernetes clustery jak z webové administrace, tak pomocí Terraformu.

## Terraform

Terraform je nástroj, který se používá ke správě infrastruktury v cloudu (veřejném i privátním). Terraform Vám umožní spravovat infrastruktutru jako kód, to znamená verzovanou v Gitu, přidávání resources pomocí merge (pull) requestů a mnoho dalších výhod. Infrastrukturu můžete dále nasadit do testovacího prostředí přesně tak, jako je v produkci, prostředí, bez zbytečného úsilí.
`}
  />
);

export default Page;
