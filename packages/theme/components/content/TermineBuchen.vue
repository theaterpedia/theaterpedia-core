<template>
  <div>
    <div>
      <div class="flex pt-6">
        <div class="">
          <p> ZUSAMMENFASSUNG</p>
          <div class="flex">
            <span class="w-28">Zeitraum:</span><span>3 Monate</span>
          </div>
          <div class="flex">
            <span class="w-28">wöchentlich:</span><span>90 Minuten</span>
          </div>
          <div class="flex">
            <span class="w-28">Kosten:</span><span>EUR 2500,00</span>
          </div>
        </div>
        <!-- modal button -->
        <label for="my-modal" class="btn modal-button md:ml-20">Mögliche Termine</label>
        <!-- modal content -->
      </div>
    </div>
    <input id="my-modal" type="checkbox" class="modal-toggle">
    <div class="modal">
      <div class="modal-box card bg-white w-full p-4 md:w-2/3 lg:w-1/2 shadow-lg">
        <!-- steps -->

        <ul class="steps w-full text-sm">
          <li class="step step-primary">
            Termin wählen
          </li>
          <li class="step">
            Kontaktdaten
          </li>
          <li class="step">
            Anfrage senden
          </li>
        </ul>

        <h1 class="text-2xl pt-8">
          Termin wählen
        </h1>

        <div class="pt-6">
          <h3 class="text-lg">
            Winterzyklus 2022
          </h3>
          <div class="flex p-2 max-w-lg outline outline-1 shadow">
            <span class="w-48">Oktober-Dezember</span>
            <span class="w-48">12 Termine Montags</span>
            <button class="bg-primary h-6 px-2 hover:bg-primary-focus active:bg-primary-focus">
              ANFRAGEN
            </button>
          </div>
          <div class="flex p-2 max-w-lg outline outline-1 shadow">
            <span class="w-48">Oktober-Dezember</span>
            <span class="w-48">12 Termine Mittwochs</span>
            <button class="bg-primary h-6 px-2 hover:bg-primary-focus active:bg-primary-focus">
              ANFRAGEN
            </button>
          </div>
        </div>

        <div class="pt-6">
          <h3 class="text-lg">
            Sommerzyklus 2023
          </h3>
          <div class="flex p-2 max-w-lg outline outline-1 shadow">
            <span class="w-48">März-Juni</span>
            <span class="w-48">12 Termine Montags</span>
            <button class="bg-primary h-6 px-2 hover:bg-primary-focus active:bg-primary-focus">
              ANFRAGEN
            </button>
          </div>
          <div class="flex p-2 max-w-lg outline outline-1 shadow">
            <span class="w-48">März-Juni</span>
            <span class="w-48">12 Termine Mittwochs</span>
            <button class="bg-primary h-6 px-2 hover:bg-primary-focus active:bg-primary-focus">
              ANFRAGEN
            </button>
          </div>
        </div>
        <label for="my-modal" class="btn w-28 mt-6">Abbrechen</label>
      </div>
    </div>
  </div>
</template>
