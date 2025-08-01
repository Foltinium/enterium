const data = [
    {
        name: "Дёрн",
        icon: "blocks/grass_block_side",
        drops: [
            { name: "Низкая трава", icon: "blocks/short_grass", count: "1", base: 0.01, biome: "Все" },
            { name: "Комок глины", icon: "items/clay_ball", count: "1-2", base: 0.009, biome: "Все" },
            { name: "Семена пшеницы", icon: "items/wheat_seeds", count: "1-2", base: 0.008, biome: "Все" },
            { name: "Семена тыквы", icon: "items/pumpkin_seeds", count: "1-2", base: 0.006, biome: "Все" },
            { name: "Семена арбуза", icon: "items/melon_seeds", count: "1-2", base: 0.005, biome: "Все" },
            { name: "Какао-бобы", icon: "items/cocoa_beans", count: "1-2", base: 0.005, biome: "Джунгли" },
            { name: "Свисающие корни", icon: "blocks/hanging_roots", count: "1", base: 0.003, biome: "Все" },
            { name: "Бамбук", icon: "items/bamboo", count: "1", base: 0.003, biome: "Джунгли" },
            { name: "Семена свёклы", icon: "items/beetroot_seeds", count: "1-2", base: 0.0025, biome: "Все" },
            { name: "Кусочек железа", icon: "items/iron_nugget", count: "1-3", base: 0.002, biome: "Все" },
            { name: "Кусочек золота", icon: "items/gold_nugget", count: "1-2", base: 0.0015, biome: "Все" },
        ]
    },
    {
        name: "Земля",
        icon: "blocks/dirt",
        drops: [
            { name: "Комок глины", icon: "items/clay_ball", count: "1-3", base: 0.01, biome: "Все" },
            { name: "Кость", icon: "items/bone", count: "1–2", base: 0.009, biome: "Все" },
            { name: "Свисающие корни", icon: "blocks/hanging_roots", count: "1–2", base: 0.008, biome: "Все" },
            { name: "Картофель", icon: "items/potato", count: "1", base: 0.006, biome: "Все" },
            { name: "Морковь", icon: "items/carrot", count: "1", base: 0.006, biome: "Все" },
            { name: "Кремень", icon: "items/flint", count: "1", base: 0.005, biome: "Все" },
            { name: "Кусочек железа", icon: "items/iron_nugget", count: "1-4", base: 0.003, biome: "Все" },
            { name: "Бамбук", icon: "items/bamboo", count: "1-2", base: 0.0025, biome: "Джунгли" },
            { name: "Кусочек золота", icon: "items/gold_nugget", count: "1-2", base: 0.002, biome: "Все" },
            { name: "Незер-кварц", icon: "items/quartz", count: "1", base: 0.0015, biome: "Все" },
            { name: "Ядовитый картофель", icon: "items/poisonous_potato", count: "1", base: 0.0005, biome: "Все" },
        ]
    },
    {
        name: "Каменистая земля",
        icon: "blocks/coarse_dirt",
        drops: [
            { name: "Гравий", icon: "blocks/gravel", count: "1", base: 0.01, biome: "Все" },
            { name: "Уголь", icon: "items/coal", count: "1", base: 0.009, biome: "Все" },
            { name: "Кусочек железа", icon: "items/iron_nugget", count: "2–6", base: 0.007, biome: "Все" },
            { name: "Кремень", icon: "items/flint", count: "1", base: 0.006, biome: "Все" },
            { name: "Кварц", icon: "items/quartz", count: "1-2", base: 0.005, biome: "Все" },
            { name: "Кусочек золота", icon: "items/gold_nugget", count: "2-4", base: 0.0035, biome: "Все" },
        ]
    },
    {
        name: "Булыжник",
        icon: "blocks/cobblestone",
        drops: [
            { name: "Гравий", icon: "blocks/gravel", count: "1", base: 0.03, biome: "Все" },
        ]
    },
    {
        name: "Гравий",
        icon: "blocks/gravel",
        drops: [
            { name: "Кремень", icon: "items/flint", count: "1-2", customChances: [0.1, 0.25, 0.5, 0.8], biome: "Все" },
            { name: "Гравий", icon: "blocks/sand", count: "1", base: 0.03, biome: "Все" },
            { name: "Кварц", icon: "items/quartz", count: "1", base: 0.01, biome: "Все" },
            { name: "Кость", icon: "items/bone", count: "1", base: 0.007, biome: "Все" },
            { name: "Морская трава", icon: "items/seagrass", count: "1", base: 0.006, biome: "Океаны и реки, кроме замёрзших" },
            { name: "Кусочек золота", icon: "items/gold_nugget", count: "2-3", base: 0.005, biome: "Реки" },
            { name: "Ламинария", icon: "items/kelp", count: "1", base: 0.004, biome: "Океаны, кроме тёплых и замёрзших" },
            { name: "Морской огурец", icon: "items/sea_pickle", count: "1-2", base: 0.0035, biome: "Тёплые океаны" },
            { name: "Кусочек железа", icon: "items/iron_nugget", count: "1-2", base: 0.003, biome: "Океаны" },
        ]
    },
    {
        name: "Песок",
        icon: "blocks/sand",
        drops: [
            { name: "Кость", icon: "items/bone", count: "1-2", base: 0.02, biome: "Пустоши и пустыни" },
            { name: "Мёртвый куст", icon: "blocks/dead_bush", count: "1", base: 0.015, biome: "Пустоши и пустыни" },
            { name: "Комок глины", icon: "items/clay_ball", count: "2-3", base: 0.01, biome: "Реки" },
            { name: "Сахарный тростник", icon: "items/sugar_cane", count: "1-2", base: 0.0095, biome: "Пляжи и реки" },
            { name: "Кактус", icon: "blocks/cactus_side", count: "1", base: 0.0085, biome: "Пустоши и пустыни" },
            { name: "Ламинария", icon: "items/kelp", count: "1-2", base: 0.007, biome: "Океаны, кроме тёплых и замёрзших" },
            { name: "Морская трава", icon: "items/seagrass", count: "1-2", base: 0.006, biome: "Океаны и реки, кроме замёрзших" },
            { name: "Морской огурец", icon: "items/sea_pickle", count: "2-3", base: 0.005, biome: "Тёплые океаны" },
            { name: "Кусочек золота", icon: "items/gold_nugget", count: "1-3", base: 0.0045, biome: "Все" },
            { name: "Кусочек золота", icon: "items/gold_nugget", count: "3-4", base: 0.004, biome: "Реки" },
            { name: "Кусочек железа", icon: "items/iron_nugget", count: "2-3", base: 0.003, biome: "Пляжи и реки" },
            { name: "Кусочек железа", icon: "items/iron_nugget", count: "1-3", base: 0.002, biome: "Океаны" },
            { name: "Кристалл призмарина", icon: "items/prismarine_crystals", count: "3-5", base: 0.0015, biome: "Океаны и пляжи" },
            { name: "Осколок призмарина", icon: "items/prismarine_shard", count: "1-2", base: 0.001, biome: "Океаны и пляжи" },
            { name: "Раковина наутилуса", icon: "items/nautilus_shell", count: "1", base: 0.00075, biome: "Океаны, реки и пляжи" },
            { name: "Сердце моря", icon: "items/heart_of_the_sea", count: "1", base: 0.0005, biome: "Океаны, реки и пляжи" },
        ]
    },
    {
        name: "Андезит",
        icon: "blocks/andesite",
        drops: [
            { name: "Булыжник", icon: "blocks/cobblestone", count: "1", base: 0.03, biome: "Все" },
            { name: "Кремень", icon: "items/flint", count: "1", base: 0.008, biome: "Все" },
            { name: "Кусочек железа", icon: "items/clay_ball", count: "1-2", base: 0.002, biome: "Все" },
        ]
    },
    {
        name: "Диорит",
        icon: "blocks/diorite",
        drops: [
            { name: "Булыжник", icon: "blocks/cobblestone", count: "1", base: 0.03, biome: "Все" },
            { name: "Кварц", icon: "items/quartz", count: "1", base: 0.005, biome: "Все" },
            { name: "Гравий", icon: "blocks/gravel", count: "1", base: 0.003, biome: "Все" },
        ]
    },
    {
        name: "Гранит",
        icon: "blocks/granite",
        drops: [
            { name: "Булыжник", icon: "blocks/cobblestone", count: "1", base: 0.03, biome: "Все" },
            { name: "Кварц", icon: "items/quartz", count: "1", base: 0.009, biome: "Все" },
            { name: "Кусочек железа", icon: "items/clay_ball", count: "1-2", base: 0.002, biome: "Все" },
        ]
    }
];

function formatChance(value) {
    return Number.isFinite(value) ? parseFloat(value.toPrecision(12)) : "";
}

function fillLootTable(data) {
    const table = document.getElementById("loot-table");

    data.forEach(block => {
        const tbody = document.createElement("tbody");

        const groupedDrops = [];
        let currentBiome = null;
        let currentGroup = [];

        block.drops.forEach(drop => {
            if (drop.biome !== currentBiome) {
                if (currentGroup.length) groupedDrops.push(currentGroup);
                currentGroup = [drop];
                currentBiome = drop.biome;
            } else {
                currentGroup.push(drop);
            }
        });
        if (currentGroup.length) groupedDrops.push(currentGroup);

        let dropIndex = 0;

        groupedDrops.forEach(group => {
            group.forEach((drop, i) => {
                const row = document.createElement("tr");

                if (dropIndex === 0) {
                    const blockCell = document.createElement("td");
                    blockCell.rowSpan = block.drops.length;
                    blockCell.innerHTML = `<img src="../assets/${block.icon}.png" class="item"> ${block.name}`;
                    row.appendChild(blockCell);
                }

                const base = drop.customChances ? drop.customChances[0] : drop.base * 100;
                const chance1 = drop.customChances ? drop.customChances[1] : drop.base * 1.3 * 100;
                const chance2 = drop.customChances ? drop.customChances[2] : drop.base * 1.65 * 100;
                const chance3 = drop.customChances ? drop.customChances[3] : drop.base * 2 * 100;

                row.innerHTML += `
                    <td><img src="../assets/${drop.icon}.png" class="item"> ${drop.name}</td>
                    <td>${drop.count}</td>
                    <td>${formatChance(base)}</td>
                    <td>${formatChance(chance1)}</td>
                    <td>${formatChance(chance2)}</td>
                    <td>${formatChance(chance3)}</td>
`;

                if (i === 0) {
                    const biomeCell = document.createElement("td");
                    biomeCell.rowSpan = group.length;
                    biomeCell.textContent = drop.biome;
                    row.appendChild(biomeCell);
                }

                tbody.appendChild(row);
                dropIndex++;
            });
        });

        table.appendChild(tbody);
    });
}

fillLootTable(data);