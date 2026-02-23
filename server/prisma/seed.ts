import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.deal.createMany({
    data: [
      {
        title: 'The Marina Torch',
        imageUrl: 'https://picsum.photos/seed/marina/900/600',
        priceDhs: 6500000,
        ticketDhs: 60000,
        yieldPct: 9.2,
        daysLeft: 150,
        soldPct: 75,
      },
      {
        title: 'HHHR Tower',
        imageUrl: 'https://picsum.photos/seed/hhhr/900/600',
        priceDhs: 6500000,
        ticketDhs: 60000,
        yieldPct: 9.25,
        daysLeft: 150,
        soldPct: 75,
      },
      {
        title: 'Ocean Peaks',
        imageUrl: 'https://picsum.photos/seed/ocean/900/600',
        priceDhs: 6500000,
        ticketDhs: 60000,
        yieldPct: 9.25,
        daysLeft: 150,
        soldPct: 75,
      },
      {
        title: 'Al Yaqoub Tower',
        imageUrl: 'https://picsum.photos/seed/yaqoub/900/600',
        priceDhs: 6500000,
        ticketDhs: 60000,
        yieldPct: 9.25,
        daysLeft: 150,
        soldPct: 75,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
