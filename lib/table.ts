import { LoanProps } from '#/ui/components/LoanStatusCard';
import { faker } from '@faker-js/faker';

type TableProps = {
  id: string;
  name: string;
  value: number;
  status: string;
  owner: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  created: Date | string;
};

export const dynamicTableData: TableProps[] = [];

for (let i = 0; i < 30; i++) {
  const tableProps: TableProps = {
    id: faker.string.uuid(),
    name: `Table ${i + 1}`,
    value: faker.number.int({ min: 100, max: 10000 }),
    status: faker.helpers.arrayElement([
      'Completed',
      'Failed',
      'In Progress',
      'Upcoming',
    ]),
    owner: {
      id: faker.string.uuid(),
      name: faker.person.firstName() + ' ' + faker.person.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    },
    created: faker.date.past(),
  };

  dynamicTableData.push(tableProps);
}

export const tableData: TableProps[] = [
  {
    id: '68ab8d40-b4e7-41ad-ae3f-e3971421c766',
    name: 'Table 1',
    value: 8800,
    status: 'Failed',
    owner: {
      id: 'c7471dd4-a296-4049-846a-d07bf8691757',
      name: 'Mariano Robel',
      email: 'Providenci.Emard38@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/21318203',
    },
    created: '2023-01-11T06:27:56.783Z',
  },
  {
    id: '202d6065-dd6a-4bfc-b825-b4b21fda595b',
    name: 'Table 2',
    value: 7272,
    status: 'Completed',
    owner: {
      id: '8877a215-2d53-4a6f-bca6-fb694bf5b78d',
      name: 'Dee Koelpin',
      email: 'Jaqueline_Adams59@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/863.jpg',
    },
    created: '2023-06-16T23:31:49.050Z',
  },
  {
    id: '0ec1face-fae9-44cf-84db-6409d688b6cf',
    name: 'Table 3',
    value: 2291,
    status: 'Upcoming',
    owner: {
      id: '6a95c381-bb55-477b-845a-7add0c71749f',
      name: 'Demario Vandervort',
      email: 'Liliana_Beer@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/51006136',
    },
    created: '2022-10-11T01:40:44.475Z',
  },
  {
    id: 'ca0360a3-9562-4101-b2a1-6d7ec1c99870',
    name: 'Table 4',
    value: 8127,
    status: 'Upcoming',
    owner: {
      id: 'bb28139f-8619-416a-b8fe-4e69e6d6853a',
      name: 'Lura Kovacek',
      email: 'Demetrius.Wisozk76@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/7680121',
    },
    created: '2022-11-21T22:43:37.566Z',
  },
  {
    id: '9e8e55a7-af83-4b8d-8468-92af158667c8',
    name: 'Table 5',
    value: 4487,
    status: 'Failed',
    owner: {
      id: '144fe4b5-5e10-4b57-b8e0-01cf54d6e98d',
      name: 'Lilla Paucek',
      email: 'Monserrate.Dibbert@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1239.jpg',
    },
    created: '2022-06-19T22:48:55.465Z',
  },
  {
    id: 'dcf1d9e7-a8f6-4d18-906e-5a0493cba3ab',
    name: 'Table 6',
    value: 2916,
    status: 'In Progress',
    owner: {
      id: '5fe3f4a1-8038-462c-82e7-d7691cc38388',
      name: 'Leo Fahey',
      email: 'Peter.Fisher6@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/9623165',
    },
    created: '2022-07-25T02:11:25.940Z',
  },
  {
    id: 'ca3a59c3-7e5a-4d7d-aa29-c451ed090043',
    name: 'Table 7',
    value: 8156,
    status: 'Failed',
    owner: {
      id: 'aa43f0bd-bb80-4f6b-9652-c439a82dfbd2',
      name: 'Jermaine Daniel',
      email: 'Isabella.Kuhlman45@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/923.jpg',
    },
    created: '2023-01-15T05:36:49.160Z',
  },
  {
    id: 'a09d0aa8-520b-4f07-83c1-e8ebdee82a95',
    name: 'Table 8',
    value: 2114,
    status: 'Failed',
    owner: {
      id: '505112fe-f26b-49e3-9f95-4bc9680a2076',
      name: 'Clifton Renner',
      email: 'Keenan_Howe@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/22073571',
    },
    created: '2022-08-24T14:26:23.633Z',
  },
  {
    id: '68d5bd78-5df1-4819-9dc5-7ee315e628dc',
    name: 'Table 9',
    value: 3434,
    status: 'Completed',
    owner: {
      id: '6aa15c35-bd47-48a0-8079-856b358e75ff',
      name: 'Ally Boyle',
      email: 'Sylvester67@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/86172368',
    },
    created: '2022-12-06T20:25:05.473Z',
  },
  {
    id: '881ab1ed-8ae2-43a0-bbae-3d3a463b6afe',
    name: 'Table 10',
    value: 1957,
    status: 'Upcoming',
    owner: {
      id: 'b59b2d53-d5c3-4ee1-a432-569835115d28',
      name: 'Marvin Jakubowski',
      email: 'Vernon93@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg',
    },
    created: '2022-11-03T08:45:01.495Z',
  },
  {
    id: '44e9b365-3fb2-49ab-925a-3fb0dcbf83f2',
    name: 'Table 11',
    value: 4944,
    status: 'Failed',
    owner: {
      id: '89056731-5a7f-4082-a27e-0a98a88908b5',
      name: 'Colin Becker',
      email: 'Graham5@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/34402144',
    },
    created: '2022-12-24T02:01:57.244Z',
  },
  {
    id: '6dd4ba2d-c22d-4a54-a5e4-8c8323e8032a',
    name: 'Table 12',
    value: 3632,
    status: 'Failed',
    owner: {
      id: 'de5a46d9-3a77-43c1-87a1-657f7bfbaff8',
      name: 'Durward Sanford',
      email: 'Mattie_Kilback-Kuphal16@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1199.jpg',
    },
    created: '2022-08-02T17:26:52.792Z',
  },
  {
    id: 'bb5d80cb-939a-4d06-8596-11da16fe0f3b',
    name: 'Table 13',
    value: 4982,
    status: 'Completed',
    owner: {
      id: '7c889361-2929-4ecb-a1bf-cea6d666a73f',
      name: 'Mittie Keeling',
      email: 'Napoleon_Hane42@yahoo.com',
      avatar: 'https://avatars.githubusercontent.com/u/62002874',
    },
    created: '2022-11-16T22:09:26.341Z',
  },
  {
    id: '25c6c419-6552-4ecd-9ca4-dd5f149dc914',
    name: 'Table 14',
    value: 678,
    status: 'Completed',
    owner: {
      id: 'a7dad477-4159-4f11-ae45-c239d7e690d2',
      name: 'Laney Boehm',
      email: 'Norbert.Dibbert42@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/42869773',
    },
    created: '2022-06-19T00:25:59.090Z',
  },
  {
    id: 'f4994baa-090f-474f-99a6-a708998280bc',
    name: 'Table 15',
    value: 6824,
    status: 'Upcoming',
    owner: {
      id: '6f7c696f-a427-4dfd-89bf-af047bbd3229',
      name: 'Douglas Welch-Legros',
      email: 'Berenice.Christiansen84@yahoo.com',
      avatar: 'https://avatars.githubusercontent.com/u/27147100',
    },
    created: '2022-08-04T18:02:48.725Z',
  },
  {
    id: 'deb8c9d1-5765-4db9-8f9d-87bd67878b4c',
    name: 'Table 16',
    value: 8394,
    status: 'Upcoming',
    owner: {
      id: 'b7a6d30f-17f4-4108-b4f8-e614d51cb815',
      name: 'Elvis Kreiger-Howe',
      email: 'Karson.Stoltenberg@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/10580842',
    },
    created: '2022-07-20T01:29:02.044Z',
  },
  {
    id: '94c4ba2a-106b-4c76-880f-bba2b1b651db',
    name: 'Table 17',
    value: 8679,
    status: 'Completed',
    owner: {
      id: '6dbe1a29-71a8-4419-a77c-3323b56acde8',
      name: 'Gilda Blick',
      email: 'Roscoe.Huels@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/342.jpg',
    },
    created: '2022-12-03T00:10:03.559Z',
  },
  {
    id: 'a391a125-9ffa-4b8a-acdb-b1fa3f8603f8',
    name: 'Table 18',
    value: 8343,
    status: 'Completed',
    owner: {
      id: '3eca27dd-3fc9-4b2b-9007-4ae8d8577fd8',
      name: 'Zelda Gerhold',
      email: 'Dameon_Pfeffer71@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/933.jpg',
    },
    created: '2023-01-09T18:49:45.366Z',
  },
  {
    id: 'b59280cd-27b7-4f95-b216-d080e9acc9cf',
    name: 'Table 19',
    value: 7132,
    status: 'Completed',
    owner: {
      id: 'e9bd6e92-9c7d-47c4-8400-9a692a5d8270',
      name: 'Chance Mayer',
      email: 'Marcelo27@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/421.jpg',
    },
    created: '2023-04-11T04:11:22.351Z',
  },
  {
    id: '8b6ccaa9-3d12-4903-be1a-32268457997e',
    name: 'Table 20',
    value: 3711,
    status: 'In Progress',
    owner: {
      id: '22ca6bf1-bcf9-42ed-ab39-5739c1856931',
      name: 'Emely Nienow',
      email: 'Kitty_Torphy29@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/11233115',
    },
    created: '2022-10-07T23:26:54.235Z',
  },
  {
    id: '91b85c5c-7a4b-497e-9ca6-82daf0eacfcf',
    name: 'Table 21',
    value: 8430,
    status: 'In Progress',
    owner: {
      id: '311a4100-8546-4c64-bc86-12390b2b7e67',
      name: 'Zoila Feeney-Wuckert',
      email: 'Antonio89@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/799.jpg',
    },
    created: '2022-11-06T14:17:42.215Z',
  },
  {
    id: 'f9f2fbb9-60b0-42f6-8401-a3ac8f53a403',
    name: 'Table 22',
    value: 3685,
    status: 'Failed',
    owner: {
      id: '6ae430bd-9bf5-4df8-98c1-e38664418212',
      name: 'Nico Volkman',
      email: 'Kevin_Nolan@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/39701998',
    },
    created: '2023-01-24T07:43:05.880Z',
  },
  {
    id: '309acddc-2123-4930-b670-b64988d12686',
    name: 'Table 23',
    value: 2697,
    status: 'In Progress',
    owner: {
      id: '1adc748b-668f-459f-9649-cc894a716293',
      name: 'Brisa Jones',
      email: 'Demetrius93@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/80369732',
    },
    created: '2023-02-22T18:02:56.036Z',
  },
  {
    id: '4a4a0e36-4a8c-4c02-b45b-c504128b15b9',
    name: 'Table 24',
    value: 8714,
    status: 'Completed',
    owner: {
      id: '2d79e87f-1942-4b4e-b6ac-a4f966d61c42',
      name: 'Alex Reinger',
      email: 'Callie.Satterfield@yahoo.com',
      avatar: 'https://avatars.githubusercontent.com/u/83184572',
    },
    created: '2022-07-11T06:04:30.929Z',
  },
  {
    id: '892ffd96-7563-4eac-8f94-3e395d0645a1',
    name: 'Table 25',
    value: 6892,
    status: 'Completed',
    owner: {
      id: '62583959-101a-46fb-be5f-018ec98a2f17',
      name: 'Joannie Herzog',
      email: 'Reva78@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1051.jpg',
    },
    created: '2023-05-30T00:07:09.256Z',
  },
  {
    id: '34fe9390-ce05-4dde-ad4a-a785b8970a9b',
    name: 'Table 26',
    value: 410,
    status: 'Completed',
    owner: {
      id: 'd57c7468-d9b5-4f97-a7a6-53fd5b01dcc0',
      name: 'Bertram Breitenberg',
      email: 'Lon98@hotmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/61429520',
    },
    created: '2022-07-13T04:34:45.141Z',
  },
  {
    id: 'e6700be0-caff-4f63-9729-8326a98f7448',
    name: 'Table 27',
    value: 7898,
    status: 'In Progress',
    owner: {
      id: '20e68b97-4731-4a3c-8ffb-55b13f8daaae',
      name: 'Meagan Koepp',
      email: 'Bennie1@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/94961882',
    },
    created: '2023-04-20T06:50:44.656Z',
  },
  {
    id: 'fded57a7-d41d-434d-b28e-c0766a3651a0',
    name: 'Table 28',
    value: 618,
    status: 'In Progress',
    owner: {
      id: '65b360df-ee0a-4135-b188-35b9ca9d74db',
      name: 'Scot Beatty',
      email: 'Grover_Reynolds@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/90156499',
    },
    created: '2023-01-29T13:35:44.308Z',
  },
  {
    id: '905f4896-2587-4db0-8311-e5c72dcbfb29',
    name: 'Table 29',
    value: 2799,
    status: 'In Progress',
    owner: {
      id: '35f4eb34-304a-4bd9-8450-5bc0397dd46f',
      name: 'Harmony Stanton',
      email: 'Christy_Kuhic@gmail.com',
      avatar: 'https://avatars.githubusercontent.com/u/79360707',
    },
    created: '2022-09-10T03:03:10.055Z',
  },
  {
    id: 'a53fb347-eaa9-4e09-a31e-1128db6f1103',
    name: 'Table 30',
    value: 5091,
    status: 'Failed',
    owner: {
      id: '0a1e8886-35b3-47c1-9a2f-01db3aa0ea3e',
      name: 'Rachel Sawayn',
      email: 'Veronica16@yahoo.com',
      avatar: 'https://avatars.githubusercontent.com/u/93864533',
    },
    created: '2023-01-15T04:44:23.152Z',
  },
];
