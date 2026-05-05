const mockData = [
    { name: "Juan Pérez", phone: "+34 600 123 456", status: "Active", location: "Madrid, ES", level: "Lvl 2" },
    { name: "Sarah Connor", phone: "+1 202 555 0199", status: "Hiding", location: "Los Angeles, US", level: "Lvl 5" },
    { name: "Aiden Pearce", phone: "+1 312 555 0101", status: "Vigilant", location: "Chicago, US", level: "Lvl 10" },
    { name: "Null Hunter", phone: "+44 20 7946 0958", status: "Ghost", location: "London, UK", level: "Lvl 99" },
];

function searchDox() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('resultsContainer');

    // Filtramos los datos
    const filtered = mockData.filter(user => user.name.toLowerCase().includes(input));

    if (filtered.length > 0) {
        container.classList.remove('hidden');
        container.innerHTML = ''; // Limpiar resultados previos

        filtered.forEach(user => {
            container.innerHTML += `
                <div class="dox-card bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                            <i data-lucide="user" class="size-6"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">${user.name}</h3>
                            <p class="text-blue-400 font-mono text-sm">${user.phone}</p>
                        </div>
                    </div>
                    <div class="space-y-3 border-t border-zinc-800 pt-4">
                        <div class="flex justify-between text-sm">
                            <span class="text-zinc-500">Estado:</span>
                            <span class="text-zinc-300">${user.status}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-zinc-500">Ubicación:</span>
                            <span class="text-zinc-300">${user.location}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-zinc-500">Nivel de Dox:</span>
                            <span class="text-zinc-300">${user.level}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        lucide.createIcons(); // Reinicializar iconos de Lucide
    } else {
        container.classList.remove('hidden');
        container.innerHTML = `<p class="text-center text-zinc-500 col-span-2">Sujeto no encontrado en ctOS. Intente de nuevo.</p>`;
    }
}

// Permitir buscar al presionar Enter
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchDox();
    }
});
