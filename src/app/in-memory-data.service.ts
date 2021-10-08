import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const items = new Array<Item> (
            { 
                bs_company_statement: "incubate granular architectures",
                business_name: "Blick-Durgan",
                buzzword: "protocol",
                catch_phrase: "Cross-group empowering parallelism",
                duns_number: "23-972-4495",
                employee_identification_number: "31-9689921",
                full_address: "139 Domitila Brook, Florencefurt, IA 24190",
                id: 1,
                industry: "Higher Education",
                latitude: -10.843419605737822,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/2.png",
                longitude: 146.21167586363737,
                phone_number: "+596 162-496-6297",
                suffix: "Inc",
                type: "Educational Institution",
                uid: "f651df29-29ab-4d95-b52e-c26cdd5b053a"
            },
             {
                bs_company_statement: "incubate global communities",
                business_name: "Wilderman, Strosin and Hand",
                buzzword: "intranet",
                catch_phrase: "Inverse coherent groupware",
                duns_number: "89-646-1788",
                employee_identification_number: "33-9312649",
                full_address: "78441 Breitenberg Prairie, Port Pearlieberg, AK 31691-9334",
                id: 2,
                industry: "Staffing and Recruiting",
                latitude: 54.9484131474002,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/11.png",
                longitude: -98.28073026949025,
                phone_number: "+967 (619) 839-3941",
                suffix: "LLC",
                type: "Sole Proprietorship",
                uid: "d8be05e1-3dd2-4ebf-9b31-cd51234d49ec"
                
             },
             {
                bs_company_statement: "redefine cutting-edge paradigms",
                business_name: "Huel-Funk",
                buzzword: "Universal",
                catch_phrase: "Object-based tertiary middleware",
                duns_number: "52-660-8494",
                employee_identification_number: "41-5444526",
                full_address: "270 Willms Squares, South Vallie, DE 04041",
                id: 3,
                industry: "Food Production",
                latitude: -69.98331671430486,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/12.png",
                longitude: -148.01357988573494,
                phone_number: "+378 466.746.7571",
                suffix: "and Sons",
                type: "Self-Employed",
                uid: "583401fe-7676-4ed9-af7e-65fb9941c56c"
                
             },
             {
                bs_company_statement: "target best-of-breed mindshare",
                business_name: "Lehner, Brown and Marquardt",
                buzzword: "Diverse",
                catch_phrase: "Persevering empowering website",
                duns_number: "16-272-5786",
                employee_identification_number: "17-4563773",
                full_address: "Suite 808 110 Felicitas Spurs, Kuhicfort, UT 82070",
                id: 4,
                industry: "Venture Capital & Private Equity",
                latitude: 22.386924445379165,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/6.png",
                longitude: 175.1108459893597,
                phone_number: "+55 806.334.9957",
                suffix: "Group",
                type: "Educational Institution",
                uid: "68d119c4-2a32-4c41-8898-3bfa5a151d75"
                
             },
             {
                bs_company_statement: "repurpose customized interfaces",
                business_name: "Pacocha-Dibbert",
                buzzword: "User-centric",
                catch_phrase: "Up-sized holistic moderator",
                duns_number: "61-062-8066",
                employee_identification_number: "18-6052171",
                full_address: "Suite 691 390 Mafalda Highway, Annview, SD 90061",
                id: 5,
                industry: "Utilities",
                latitude: 52.82035846804777,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/9.png",
                longitude: 63.876930089586864,
                phone_number: "+36 (727) 006-1001",
                suffix: "LLC",
                type: "Privately Held",
                uid: "87fa715e-78e3-410a-ba48-73a96ed72b95"
                
             },
             {
                bs_company_statement: "recontextualize out-of-the-box markets",
                business_name: "Graham-Herman",
                buzzword: "forecast",
                catch_phrase: "Balanced radical artificial intelligence",
                duns_number: "83-196-2812",
                employee_identification_number: "74-9304417",
                full_address: "350 Vada Turnpike, New Lukechester, WV 10467-1074",
                id: 6,
                industry: "Online Media",
                latitude: -15.662540371623848,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/12.png",
                longitude: -46.2296891527198,
                phone_number: "+971 (894) 987-5297",
                suffix: "Inc",
                type: "Nonprofit",
                uid: "408f62d2-fe35-40a8-97a3-7b1bc275bab0"
                
             },
             {
                bs_company_statement: "maximize real-time e-commerce",
                business_name: "Buckridge and Sons",
                buzzword: "multi-tasking",
                catch_phrase: "Self-enabling bi-directional task-force",
                duns_number: "08-355-5000",
                employee_identification_number: "89-2449712",
                full_address: "3020 Moses Mountain, North Rodolfofort, KY 73288-2321",
                id: 7,
                industry: "Higher Education",
                latitude: -88.85411430798538,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/6.png",
                longitude: 76.50024802316148,
                phone_number: "+504 580.463.3021",
                suffix: "and Sons",
                type: "Sole Proprietorship",
                uid: "87b106f4-5b73-4773-9313-a4da9635576a"
                
             },
             {
                bs_company_statement: "extend one-to-one supply-chains",
                business_name: "Farrell, Block and Grant",
                buzzword: "hybrid",
                catch_phrase: "Total logistical productivity",
                duns_number: "01-281-9594",
                employee_identification_number: "05-3247939",
                full_address: "Suite 331 844 Rowe Ways, Concepcionview, LA 39594",
                id: 8,
                industry: "Import and Export",
                latitude: -20.372251964600707,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/6.png",
                longitude: -83.65638622541861,
                phone_number: "+86 585-769-4944",
                suffix: "and Sons",
                type: "Privately Held",
                uid: "d22ad3c9-d98c-4074-acdf-b850ae18f36b"
                
             },
             {
                bs_company_statement: "strategize extensible deliverables",
                business_name: "Kutch, Volkman and Herzog",
                buzzword: "Progressive",
                catch_phrase: "Future-proofed grid-enabled attitude",
                duns_number: "08-614-8096",
                employee_identification_number: "49-0576180",
                full_address: "2966 Skiles Rue, Reichertview, IN 19612",
                id: 9,
                industry: "Investment Management",
                latitude: 49.890174523300715,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/1.png",
                longitude: -16.259779123249558,
                phone_number: "+41 (190) 900-2952",
                suffix: "LLC",
                type: "Public Company",
                uid: "25ac4734-d4ae-4276-8d70-e24a3b0b384e"
                
             },
             {
                bs_company_statement: "facilitate B2C markets",
                business_name: "Johnston-Schroeder",
                buzzword: "Persistent",
                catch_phrase: "Multi-tiered incremental monitoring",
                duns_number: "14-503-1195",
                employee_identification_number: "58-4232373",
                full_address: "220 Stiedemann Cliff, Konopelskiville, TN 44579",
                id: 10,
                industry: "Telecommunications",
                latitude: 0.5624619395358081,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/7.png",
                longitude: 123.7756933511397,
                phone_number: "+36 611.002.4754",
                suffix: "Group",
                type: "Sole Proprietorship",
                uid: "13448811-afb3-4b76-aa8e-68dd9eb71bcd"
                
             },
             {
                bs_company_statement: "reinvent out-of-the-box action-items",
                business_name: "Anderson-Prohaska",
                buzzword: "De-engineered",
                catch_phrase: "Balanced interactive collaboration",
                duns_number: "45-409-7140",
                employee_identification_number: "59-0092981",
                full_address: "1992 Stoltenberg Shoal, Reillyview, VA 54105-7346",
                id: 11,
                industry: "Luxury Goods & Jewelry",
                latitude: 45.11701769643341,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/2.png",
                longitude: 97.22060874159308,
                phone_number: "+229 (329) 010-1133",
                suffix: "Inc",
                type: "Public Company",
                uid: "1444dd29-cb88-4e95-a4d5-e279f26e5f14"
                
             },
             {
                bs_company_statement: "enable interactive infomediaries",
                business_name: "Mosciski Inc",
                buzzword: "flexibility",
                catch_phrase: "Optimized scalable success",
                duns_number: "99-989-6553",
                employee_identification_number: "85-7645099",
                full_address: "229 Michale Pines, Lake Jeraldinehaven, OR 32477-3353",
                id: 12,
                industry: "Libraries",
                latitude: -41.4405329259913,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/5.png",
                longitude: -178.41380956969164,
                phone_number: "+380 160-934-8083",
                suffix: "and Sons",
                type: "Partnership",
                uid: "8177f51d-e603-48a3-8722-b990d61aeae5"
                
             },
             {
                bs_company_statement: "exploit vertical partnerships",
                business_name: "Kuhic-Hauck",
                buzzword: "Intuitive",
                catch_phrase: "Configurable radical project",
                duns_number: "64-058-3730",
                employee_identification_number: "48-7454901",
                full_address: "Apt. 309 17602 Jeanine Squares, Pagacstad, KS 03628",
                id: 13,
                industry: "E-Learning",
                latitude: -29.103337820197225,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/10.png",
                longitude: 89.98383229482164,
                phone_number: "+44 753.647.3400",
                suffix: "and Sons",
                type: "Self-Employed",
                uid: "df87a49a-056a-4cd6-9053-94b1034e242b"
                
             },
             {
                bs_company_statement: "morph compelling e-services",
                business_name: "Lemke Inc",
                buzzword: "Exclusive",
                catch_phrase: "Reverse-engineered explicit forecast",
                duns_number: "58-883-6497",
                employee_identification_number: "16-6095343",
                full_address: "3110 Miesha Harbors, West Joiside, ID 19109-0381",
                id: 14,
                industry: "Information Technology and Services",
                latitude: 61.182040324528145,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/10.png",
                longitude: 66.47434446907818,
                phone_number: "+7-6 1-681-912-0202",
                suffix: "and Sons",
                type: "Privately Held",
                uid: "5a82e9d3-431f-413e-bcc5-a06b1b5fc0a6"
                
             },
             {
                bs_company_statement: "envisioneer robust platforms",
                business_name: "Labadie-Schroeder",
                buzzword: "pricing structure",
                catch_phrase: "Centralized real-time utilisation",
                duns_number: "36-510-3230",
                employee_identification_number: "74-0671630",
                full_address: "Apt. 232 61647 Wehner Trace, Romagueraview, TN 29471",
                id: 15,
                industry: "Civil Engineering",
                latitude: -29.74519852891165,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/11.png",
                longitude: -105.37234571476124,
                phone_number: "+230 (440) 423-4153",
                suffix: "Inc",
                type: "Public Company",
                uid: "ab84d387-086f-4263-b018-6f72ee797e0a"
                
             },
             {
                bs_company_statement: "envisioneer robust platforms",
                business_name: "Anton-Fattakhov",
                buzzword: "pricing structure",
                catch_phrase: "Centralized real-time utilisation",
                duns_number: "36-510-3230",
                employee_identification_number: "74-0671630",
                full_address: "Ekaterinburg",
                id: 16,
                industry: "IT Engineering",
                latitude: -29.74519852891165,
                logo: "https://pigment.github.io/fake-logos/logos/medium/color/11.png",
                longitude: -105.37234571476124,
                phone_number: "+999 (999) 999-9999",
                suffix: "Inc",
                type: "Public Company",
                uid: "ab84d387-086f-4263-b018-6f72ee797e0a"
                
             }
        );
        return { items };
      }
  constructor() { }
}
