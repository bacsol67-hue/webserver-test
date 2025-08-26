// ===================================================================================
// == TELJES, VÉGLEGES ÉS JAVÍTOTT APP.JS KÓD
// ===================================================================================

const mockStrings = {
  "hu": {
    "language_name": "Magyar",
    "language_label": "Nyelv",
    "nav_clients": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      Kliensek
    `,
    "nav_calibration": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
      Kalibráció
    `,
    "nav_activate": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
      Aktiválás
    `,
    "nav_log": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
      Napló
    `,
    "volume_set_for_age_asd": "Egységes hangerő beállítva (alacsony életkor / autizmus spektrumzavar miatt).",
    "stuttering_volume_reduction": "Beszédzavar: bal hangerő csökkentve (11-20. alkalom).",
    "modal_pre_activation_check_title": "Aktiválás Előtti Ellenőrzés",
    "modal_bt_status": "Bluetooth",
    "modal_bt_connected": "Csatlakoztatva",
    "modal_bt_disconnected": "Nincs kapcsolat",
    "modal_device_battery": "Eszköz Akkumulátor",
    "modal_headphone_battery": "Fejhallgató Akkumulátor",
    "modal_battery_unknown": "Ismeretlen",
    "modal_warning_title": "Figyelem:",
    "modal_warning_bt_disconnected": "Nincs Bluetooth fejhallgató csatlakoztatva!",
    "modal_warning_device_low_battery": "Az eszköz akkumulátora hamarosan lemerül!",
    "modal_warning_headphone_low_battery": "A fejhallgató akkumulátora hamarosan lemerül!",
    "modal_success_message": "Minden rendben, az eszköz készen áll az aktiválásra.",
    "modal_button_cancel": "Mégse",
    "modal_button_activate_anyway": "Aktiválás Mindenképp",
    "modal_button_activate": "Aktiválás",
    "header_title": "Tréneri Felület",
    "age_label": "Életkor",
    "age_not_specified": "Nincs megadva",
    "age_invalid_date": "Érvénytelen dátum",
    "age_year": "év",
    "age_month": "hónap",
    "no_data_available": "Nincs adat",
    "clients_title": "Kliensek",
    "new_client_btn": "Új Kliens Hozzáadása",
    "datasheet_title": "Kliens Adatlap",
    "basic_info_title": "Alapadatok",
    "name_label": "Név",
    "dob_label": "Születési idő",
    "diagnostics_title": "Diagnosztikai adatok",
    "asd_label": "Autizmus spektrumzavar",
    "stuttering_label": "Beszéd- és nyelvi zavar",
    "audiogram_label": "Rendelkezik audiogrammal",
    "audiogram_results_title": "Audiológiai Eredmények",
    "audiogram_input_title": "Adja meg az audiológiai vizsgálat eredményét!",
    "left_ear": "Bal fül",
    "right_ear": "Jobb fül",
    "evaluate_title": "Kiértékelés",
    "plan_gen_title": "Tervgenerálás",
    "basic_btn": "Alapbeállítás",
    "recommended_btn": "Ajánlott Beállítás",
    "evaluate_btn": "Kiértékelés",
    "training_plan_title": "Részletes Tréningterv",
    "session": "alkalom",
    "volume_l": "Bal hangerő",
    "volume_r": "Jobb hangerő",
    "filters": "Szűrők",
    "save_btn": "Mentés",
    "cancel_btn": "Mégsem",
    "delete_btn": "Kliens Törlése",
    "delete_confirm": "Biztosan törli ezt a klienst? Ez a művelet nem vonható vissza.",
    "back_btn": "Vissza a listához",
    "edit_btn": "Szerkesztés",
    "action_header": "Művelet",
    "name_header": "Név",
    "page_under_dev": "Ez a felület még fejlesztés alatt áll.",
    "save_success": "Sikeresen mentve!",
    "delete_success": "Kliens törölve!",
    "basic_plan_applied": "Alapbeállítások alkalmazva!",
    "recommendation_generated": "Ajánlott beállítások legenerálva és alkalmazva!",
    "recommendation_requires_audiogram": "Az ajánlott beállításhoz rögzített audiogram szükséges!",
    "no_filter_needed": "Szűrés beállítására nincs szükség.",
    "filters_set": "Beállított szűrők:",
    "right_ear_eval": "Jobb fül",
    "left_ear_eval": "Bal fül",
    "avg_short": "átlag",
    "peaks_short": "Szűréshez figyelembe vett csúcsok",
    "hearing_loss_recommendation": "Halláscsökkenés miatt szűrők nem javasoltak.",
    "too_many_peaks_recommendation": "Túl sok összesített csúcs miatt szűrők nem javasoltak.",
    "training_repeat_recommended": "A tréning ismétlése 6-9 hónap múlva javasolt.",
    "dominance_title": "Fül Dominancia",
    "dominant_ear": "Domináns fül",
    "sound_sensitivity_title": "Átlagosnál érzékenyebb hallás",
    "points_below_zero_db": "pont 0 dB alatt",
    "pta_title": "Beszédértési Átlag (PTA)",
    "medical_warning": "Figyelmeztetés: Az eredmények az ép hallástartományon kívüli értékeket tartalmaznak. Orvosi/audiológiai kivizsgálás javasolt.",
    "clients_instructions": "Itt történik a tréning személyre szabása, az audiogramok kiértékelése és a 10 napos tréning pontos beállítása. Új kliens hozzáadásához kattints a gombra, vagy válassz egy meglévőt a szerkesztéshez.",
    "sync_instructions": "Ezen az oldalon tudja a kiválasztott kliensek adatait az AIT-GO eszközre másolni. Ellenőrizze az eszköz állapotát és válassza ki a szinkronizálandó klienseket.",
    "log_instructions": "Az eseménynapló az eszköz működése közbeni fontosabb eseményeket rögzíti, mint például a munkamenetek indítása vagy a Bluetooth kapcsolat állapota.",
    "calib_title": "Fejhallgató Kalibráció",
    "calib_instructions": "Helyezze a zajszintmérőt a fejhallgató fülpárnájára. A kalibráció elindítása után a rendszer automatikusan beállítja a hangerőszinteket. Minden szintnél írja be a műszeren leolvasott dB értéket, majd kattintson a 'Rögzít' gombra.",
    "calib_start_btn": "Kalibráció Indítása",
    "calib_step_title": "Mérés",
    "calib_volume_level": "Hangerő Beállítása",
    "calib_measured_db": "Mért érték (dB)",
    "calib_record_btn": "Rögzít",
    "calib_table_header_percent": "Beállított Hangerő (%)",
    "calib_table_header_db": "Mért Hangerő (dB)",
    "calib_finish_btn": "Kalibráció Mentése az Eszközre",
    "calib_complete_title": "Kalibráció Befejezve",
    "calib_complete_text": "Az értékek rögzítve. A mentéshez kattintson a lenti gombra.",
    "calib_success_notification": "Kalibráció sikeresen mentve!",
    "log_title": "Eseménynapló",
    "log_refresh_btn": "Napló Frissítése",
    "log_download_btn": "Napló Letöltése (CSV)",
    "log_clear_btn": "Napló Törlése",
    "log_clear_confirm": "Biztosan törli a teljes eseménynaplót az eszközről? Ez a művelet nem vonható vissza.",
    "log_cleared_notification": "Napló sikeresen törölve.",
    "log_table_header_time": "Időbélyeg",
    "log_table_header_event": "Esemény",
    "log_table_header_details": "Részletek",
    "sync_title": "AIT-GO Eszköz Aktiválása",
    "sync_status_title": "Eszköz Jelenlegi Állapota",
    "sync_last_sync": "Az AIT-tréning kezdete",
    "sync_synced_clients": "A tréningen részt vevő(k)",
    "training_end_date": "Várható tréning befejezés",
    "sync_no_clients": "Nincsenek kliensek az eszközön.",
    "sync_select_clients_title": "Aktiválandó Kliensek Kiválasztása",
    "sync_select_all": "Összes kijelölése",
    "sync_deselect_all": "Kijelölés törlése",
    "sync_action_btn": "Kijelölt Kliensek Aktiválása az Eszközön",
    "sync_success_notification": "Sikeres aktiválás!",
    "sync_no_selection_alert": "Kérlek, válassz ki legalább egy klienst az aktiváláshoz.",
    "sync_clear_btn": "Eszköz Memóriájának Törlése",
    "sync_clear_confirm": "Biztosan törli az összes kliens adatot az eszközről? Ezzel az eszköz alaphelyzetbe áll.",
    "sync_cleared_notification": "Eszköz memóriája sikeresen törölve."
  },
  "en": {
    "language_name": "English",
    "language_label": "Language",
    "nav_clients": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      Clients
    `,
    "nav_calibration": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
      Calibration
    `,
    "nav_activate": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
      Activation
    `,
    "nav_log": `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
      Log
    `,
    "volume_set_for_age_asd": "Flat volume set (due to young age / autism spectrum disorder).",
    "stuttering_volume_reduction": "Stuttering: left volume reduced (sessions 11-20).",
    "modal_pre_activation_check_title": "Pre-Activation Check",
    "modal_bt_status": "Bluetooth",
    "modal_bt_connected": "Connected",
    "modal_bt_disconnected": "Not connected",
    "modal_device_battery": "Device Battery",
    "modal_headphone_battery": "Headphone Battery",
    "modal_battery_unknown": "Unknown",
    "modal_warning_title": "Warning:",
    "modal_warning_bt_disconnected": "No Bluetooth headphones connected!",
    "modal_warning_device_low_battery": "The device battery is low!",
    "modal_warning_headphone_low_battery": "The headphone battery is low!",
    "modal_success_message": "Everything is OK, the device is ready for activation.",
    "modal_button_cancel": "Cancel",
    "modal_button_activate_anyway": "Activate Anyway",
    "modal_button_activate": "Activate",
    "header_title": "Trainer Interface",
    "age_label": "Age",
    "age_not_specified": "Not specified",
    "age_invalid_date": "Invalid date",
    "age_year": "years",
    "age_month": "months",
    "no_data_available": "No data available",
    "clients_title": "Clients",
    "new_client_btn": "Add New Client",
    "datasheet_title": "Client Datasheet",
    "basic_info_title": "Basic Info",
    "name_label": "Name",
    "dob_label": "Date of Birth",
    "diagnostics_title": "Diagnostic Data",
    "asd_label": "Autism spectrum disorder",
    "stuttering_label": "Speech and language disorder",
    "audiogram_label": "Has audiogram data",
    "audiogram_results_title": "Audiological Results",
    "audiogram_input_title": "Enter the audiological test results!",
    "left_ear": "Left ear",
    "right_ear": "Right ear",
    "evaluate_title": "Evaluation",
    "plan_gen_title": "Plan Generation",
    "basic_btn": "Basic Settings",
    "recommended_btn": "Recommended Settings",
    "evaluate_btn": "Evaluate",
    "training_plan_title": "Detailed Training Plan",
    "session": "session",
    "volume_l": "Left volume",
    "volume_r": "Right volume",
    "filters": "Filters",
    "save_btn": "Save",
    "cancel_btn": "Cancel",
    "delete_btn": "Delete Client",
    "delete_confirm": "Are you sure you want to delete this client? This action cannot be undone.",
    "back_btn": "Back to list",
    "edit_btn": "Edit",
    "action_header": "Action",
    "name_header": "Name",
    "page_under_dev": "This section is under development.",
    "save_success": "Saved successfully!",
    "delete_success": "Client deleted!",
    "basic_plan_applied": "Basic settings applied!",
    "recommendation_generated": "Recommended settings have been generated and applied!",
    "recommendation_requires_audiogram": "Recommended settings require saved audiogram data!",
    "no_filter_needed": "No filtering needed.",
    "filters_set": "Filters set:",
    "right_ear_eval": "Right ear",
    "left_ear_eval": "Left ear",
    "avg_short": "avg",
    "peaks_short": "Peaks considered for filtering",
    "hearing_loss_recommendation": "Filters are not recommended due to hearing loss.",
    "too_many_peaks_recommendation": "Filters are not recommended due to too many combined peaks.",
    "training_repeat_recommended": "Repetition of the training is recommended in 6-9 months.",
    "dominance_title": "Ear Dominance",
    "dominant_ear": "Dominant ear",
    "sound_sensitivity_title": "More sensitive hearing than average",
    "points_below_zero_db": "point(s) below 0 dB",
    "pta_title": "Pure Tone Average (PTA)",
    "medical_warning": "Warning: Results contain values outside the normal hearing range. Medical/audiological examination is recommended.",
    "clients_instructions": "This is where the training is personalized, audiograms are evaluated, and the 10-day training plan is precisely configured. To add a new client, click the button, or select an existing one to edit.",
    "sync_instructions": "On this page, you can copy the selected clients' data to the AIT-GO device. Please check the device status and select the clients to sync.",
    "log_instructions": "The event log records important events during the device's operation, such as session starts or Bluetooth connection status.",
    "calib_title": "Headphone Calibration",
    "calib_instructions": "Place the sound level meter on the headphone's earcup. After starting the calibration, the system will automatically set the volume levels. At each level, enter the measured dB value, then click the 'Record' button.",
    "calib_start_btn": "Start Calibration",
    "calib_step_title": "Measurement",
    "calib_volume_level": "Set Volume",
    "calib_measured_db": "Measured Value (dB)",
    "calib_record_btn": "Record",
    "calib_table_header_percent": "Set Volume (%)",
    "calib_table_header_db": "Measured dB",
    "calib_finish_btn": "Save Calibration to Device",
    "calib_complete_title": "Calibration Complete",
    "calib_complete_text": "The values have been recorded. Click the button below to save.",
    "calib_success_notification": "Calibration saved successfully!",
    "log_title": "Event Log",
    "log_refresh_btn": "Refresh Log",
    "log_download_btn": "Download Log (CSV)",
    "log_clear_btn": "Clear Log",
    "log_clear_confirm": "Are you sure you want to delete the entire event log from the device? This action cannot be undone.",
    "log_cleared_notification": "Log cleared successfully.",
    "log_table_header_time": "Timestamp",
    "log_table_header_event": "Event",
    "log_table_header_details": "Details",
    "sync_title": "AIT-GO Device Activation",
    "sync_status_title": "Current Device Status",
    "sync_last_sync": "AIT Training Start",
    "sync_synced_clients": "Training Participant(s)",
    "training_end_date": "Expected Training End",
    "sync_no_clients": "No clients on the device.",
    "sync_select_clients_title": "Select Clients to Activate",
    "sync_select_all": "Select All",
    "sync_deselect_all": "Deselect All",
    "sync_action_btn": "Activate Selected Clients on Device",
    "sync_success_notification": "Activation successful!",
    "sync_no_selection_alert": "Please select at least one client to activate.",
    "sync_clear_btn": "Clear Device Memory",
    "sync_clear_confirm": "Are you sure you want to delete all client data from the device? This will reset the device.",
    "sync_cleared_notification": "Device memory cleared successfully."
  }
};
const getText = (key) => mockStrings[currentLang]?.[key] || mockStrings['en']?.[key] || `[${key}]`;
let mockClients = [];

// --- NYELVI BEÁLLÍTÁSOK KEZELÉSE ---
let initialLang = 'hu'; // Alapértelmezett nyelv, ha minden más sikertelen.

// 1. Van mentett nyelv a böngésző memóriájában?
const userSavedLang = localStorage.getItem('language');
if (userSavedLang && mockStrings[userSavedLang]) {
  initialLang = userSavedLang;
} else {
  // 2. Ha nincs, a böngésző nyelvét támogatjuk? (pl. 'en-US' -> 'en')
  const browserLang = navigator.language.substring(0, 2);
  if (mockStrings[browserLang]) {
    initialLang = browserLang;
  }
}

let currentLang = initialLang;

let mockDeviceState = {
    lastSync: null, // "Nincs adat" helyett null
    syncedClients: [],
    trainingEndDate: null
};
let mockLogData = `2025-08-22 08:00:15;DEVICE_BOOT;;
2025-08-22 08:01:22;BT_CONNECTED;JBL Tune500BT;`;

// App State
const BASIC_VOLUME_SCHEDULE = [ 65, 65, 65, 65, 70, 70, 70, 70, 75, 75, 80, 80, 80, 80, 85, 85, 85, 85, 85, 85 ];
let isFormDirty = false;
const CALIB_STEPS = [20, 30, 40, 50, 60, 70, 80, 90];
let currentCalibStepIndex = 0;
let calibrationData = [];

let currentPage = 'clients';
const AUDIOGRAM_FREQUENCIES = [125, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
const AUDIOGRAM_DB_MIN = -10;
const AUDIOGRAM_DB_MAX = 120;

// --- UTILITY FUNCTIONS ---

// Hardver állapot szimulációja. Később ez egy valódi API hívás lesz.
function fetchDeviceStatus() {
    console.log("Szimuláció: Eszköz állapotának lekérdezése...");
    return new Promise(resolve => {
        setTimeout(() => {
            // Próbáld ki a "success" és "warning" eseteket a "mockStatus" cseréjével
            const mockStatus_success = {
                bt_connected: true,
                bt_device_name: "Sony WH-1000XM4",
                m5_battery: 85,
                hs_battery: 70
            };
            const mockStatus_warning = {
                bt_connected: true,
                bt_device_name: "JBL Go",
                m5_battery: 95,
                hs_battery: 15 // Alacsony töltöttség
            };
            resolve(mockStatus_success); 
        }, 500); // 0.5 másodperc várakozás a szimulációhoz
    });
}

// Modális ablak megjelenítése/elrejtése
function toggleModal(show) {
    document.getElementById('modal-overlay').classList.toggle('hidden', !show);
}
function showNotification(messageKey) {
  const notification = document.getElementById('notification');
  notification.innerText = getText(messageKey);
  notification.classList.add('show');
  setTimeout(() => { notification.classList.remove('show'); }, 3000);
}

function calculateAndDisplayAge(dobString) {
    const displayElement = document.getElementById('client-age-display');
    if (!dobString) {
        displayElement.textContent = getText('age_not_specified');
        return;
    }

    const birthDate = new Date(dobString);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        displayElement.textContent = getText('age_invalid_date');
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }

    displayElement.textContent = `${years} ${getText('age_year')} ${months} ${getText('age_month')}`;
}

function updateAccordionHeader(accordionItem) {
    if (!accordionItem) return;
    const summaryElement = accordionItem.querySelector('.summary-text');
    const content = accordionItem.querySelector('.accordion-content');
    if (!summaryElement || !content) return;
    const volumeInputs = content.querySelectorAll('.volume-control input[type="number"]');
    const vl = volumeInputs[0].value;
    const vr = volumeInputs[1].value;
    const filters = [1000, 1500, 2000, 3000, 4000, 8000];
    const checkboxes = content.querySelectorAll('.filter-grid input[type="checkbox"]');
    const activeFilters = Array.from(checkboxes).map((cb, index) => cb.checked ? (filters[index] < 1000 ? filters[index] : `${filters[index]/1000}k`) : null).filter(Boolean).join(', ');
    const volumeSummary = `<span style="color:var(--audiogram-right-color)">R:${vr}dB</span> / <span style="color:var(--audiogram-left-color)">L:${vl}dB</span>`;
    const filterSummary = activeFilters ? `| ${getText('filters')}: ${activeFilters}` : '';
    summaryElement.innerHTML = `${volumeSummary} ${filterSummary}`;
}

// --- FORM STATE MANAGEMENT ---
function setFormDirty() {
    isFormDirty = true;
    const saveButton = document.getElementById('save-button');
    if (saveButton) saveButton.removeAttribute('disabled');
}
function setFormClean() {
    isFormDirty = false;
    const saveButton = document.getElementById('save-button');
    if (saveButton) saveButton.setAttribute('disabled', 'true');
}


// --- LANGUAGE & UI TEXT ---
function populateLanguageSelector() {
    const container = document.getElementById('lang-selector-container');
    container.innerHTML = '';
    for (const langCode in mockStrings) {
        const button = document.createElement('button');
        button.className = 'lang-button';
        button.dataset.lang = langCode;
        button.innerHTML = `${langCode.toUpperCase()} <span style="font-weight:400;">${mockStrings[langCode].language_name}</span>`;
        if (langCode === currentLang) {
            button.classList.add('active');
        }
        container.appendChild(button);
    }
}

function updateUiText() {
    document.getElementById('header-title-text').textContent = getText('header_title'); // <-- ÚJ SOR
    document.getElementById('nav-clients').innerHTML = getText('nav_clients');
    document.getElementById('nav-calibration').innerHTML = getText('nav_calibration');
    document.getElementById('nav-log').innerHTML = getText('nav_log');
    document.getElementById('nav-activate').innerHTML = getText('nav_activate');
}

function changeLanguage(langCode) {
    currentLang = langCode;
    localStorage.setItem('language', langCode); // <-- EZ AZ ÚJ SOR
    document.documentElement.lang = langCode;
    populateLanguageSelector();
    renderPage(currentPage);
}


// --- PAGE ROUTING & RENDERING ---
function renderPage(pageId, navElement = null) {
    if (isFormDirty && !confirm("A módosítások nem lettek elmentve. Biztosan elhagyja az oldalt?")) {
        return;
    }
    isFormDirty = false;
    if (navElement) {
        currentPage = pageId;
        document.querySelectorAll('aside a').forEach(el => el.classList.remove('active'));
        navElement.classList.add('active');
    } else {
        const pageName = (pageId.startsWith('datasheet')) ? 'clients' : pageId;
        const activeLink = document.getElementById(`nav-${pageName}`);
        if (activeLink) {
            document.querySelectorAll('aside a').forEach(el => el.classList.remove('active'));
            activeLink.classList.add('active');
        }
    }
    updateUiText();
    if (pageId.startsWith('datasheet_')) {
        const idPart = pageId.substring('datasheet_'.length);
        renderClientDatasheetPage(idPart);
    } else {
        const renderFunction = {
            'clients': renderClientListPage,
            'calibration': renderCalibrationPage,
            'log': renderLogPage,
            'activate': renderActivatePage,
        }[pageId];
        if (renderFunction) {
            renderFunction();
        } else {
            document.getElementById('content-area').innerHTML = `<article><h2>${getText('nav_'+pageId) || 'Ismeretlen oldal'}</h2><p>${getText('page_under_dev')}</p></article>`;
        }
    }
}

// --- AUDIOGRAM DRAWING ---
function drawAudiogram(side) {
    const canvas = document.getElementById(`audiogram-canvas-${side}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;
    const paddingTop = 20, paddingBottom = 30, paddingLeft = 55, paddingRight = 10;
    const plotWidth = w - paddingLeft - paddingRight;
    const plotHeight = h - paddingTop - paddingBottom;
    const rootStyles = getComputedStyle(document.documentElement);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = rootStyles.getPropertyValue('--card-bg-color').trim();
    ctx.fillRect(0, 0, w, h);
    const freqPositions = [0, 0.15, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1];
    const getX = (index) => paddingLeft + plotWidth * freqPositions[index];
    const getY = (db) => paddingTop + (((db - AUDIOGRAM_DB_MIN) / (AUDIOGRAM_DB_MAX - AUDIOGRAM_DB_MIN)) * plotHeight);
    ctx.strokeStyle = rootStyles.getPropertyValue('--audiogram-grid-color').trim();
    ctx.lineWidth = 1;
    ctx.font = '10px ' + rootStyles.getPropertyValue('--pico-font-family');
    ctx.fillStyle = rootStyles.getPropertyValue('--pico-muted-color').trim();
    ctx.textAlign = 'center';
    AUDIOGRAM_FREQUENCIES.forEach((freq, i) => {
        const x = getX(i);
        ctx.beginPath();
        ctx.moveTo(x, paddingTop);
        ctx.lineTo(x, paddingTop + plotHeight);
        ctx.stroke();
        const label = freq < 1000 ? freq : `${freq / 1000}k`;
        ctx.fillText(label, x, paddingTop + plotHeight + 15);
    });
    ctx.textAlign = 'right';
    for (let db = AUDIOGRAM_DB_MIN; db <= AUDIOGRAM_DB_MAX; db += 10) {
        const y = getY(db);
        ctx.beginPath();
        ctx.moveTo(paddingLeft - 5, y);
        ctx.lineTo(paddingLeft + plotWidth, y);
        ctx.stroke();
        ctx.fillText(db, paddingLeft - 8, y + 3);
    }
    ctx.fillText("dB HL", paddingLeft - 8, paddingTop - 10);
    const values = AUDIOGRAM_FREQUENCIES.map((_, i) => {
        const input = document.getElementById(`audiogram-${side}-${i}`);
        return input ? parseInt(input.value, 10) : null;
    }).filter(v => v !== null);
    if (values.length !== AUDIOGRAM_FREQUENCIES.length) return;
    const color = rootStyles.getPropertyValue(side === 'l' ? '--audiogram-left-color' : '--audiogram-right-color').trim();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    values.forEach((db, i) => {
        const x = getX(i);
        const y = getY(db);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    values.forEach((db, i) => {
        const x = getX(i);
        const y = getY(db);
        ctx.beginPath();
        if (side === 'r') {
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.stroke();
        } else {
            ctx.moveTo(x - 4, y - 4); ctx.lineTo(x + 4, y + 4);
            ctx.moveTo(x + 4, y - 4); ctx.lineTo(x - 4, y + 4);
            ctx.stroke();
        }
    });
}

// --- PAGE RENDERERS ---

function renderClientListPage(){
    const contentArea = document.getElementById('content-area');
    let clientRows = mockClients.map(c => `<tr><td>${c.name}</td><td><button class="btn" data-page-id="datasheet_${c.id}">${getText('edit_btn')}</button></td></tr>`).join('');
    contentArea.innerHTML = `<article>
            <header>
                <h2>${getText('clients_title')}</h2>
                <p>${getText('clients_instructions')}</p>
            </header>
            <button class="btn" data-page-id="datasheet_new">${getText('new_client_btn')}</button>
            <table>
                <thead><tr><th>${getText('name_header')}</th><th>${getText('action_header')}</th></tr></thead>
                <tbody>${clientRows}</tbody>
            </table>
        </article>`;
}

function renderActivatePage() {
    const contentArea = document.getElementById('content-area');
    const clientListHTML = mockClients.map(client => `
        <label>
            <input type="checkbox" name="client-sync" value="${client.id}">
            ${client.name}
        </label>
    `).join('<br>');

    const syncedClientsList = mockDeviceState.syncedClients.length > 0
        ? `<ul>${mockDeviceState.syncedClients.map(name => `<li>${name}</li>`).join('')}</ul>`
        : `<p><small>${getText('sync_no_clients')}</small></p>`;

    // --- JAVÍTOTT RÉSZ ---
    // Megjelenítéskor döntjük el, mit írunk ki
    const lastSyncDisplay = mockDeviceState.lastSync
        ? new Date(mockDeviceState.lastSync).toLocaleString(currentLang === 'hu' ? 'hu-HU' : 'en-GB')
        : getText('no_data_available');

    const endDateFormatted = mockDeviceState.trainingEndDate
        ? new Date(mockDeviceState.trainingEndDate).toLocaleDateString(currentLang === 'hu' ? 'hu-HU' : 'en-GB')
        : getText('no_data_available');
    // --- JAVÍTÁS VÉGE ---

    contentArea.innerHTML = `
        <article>
            <header>
                <h2>${getText('sync_title')}</h2>
                <p>${getText('sync_instructions')}</p>
            </header>
            <article>
                <header><strong>${getText('sync_status_title')}</strong></header>
                <p>
                    <strong>${getText('sync_last_sync')}:</strong> ${lastSyncDisplay}<br>
                    <strong>${getText('training_end_date')}:</strong> ${endDateFormatted}<br>
                    <strong>${getText('sync_synced_clients')}:</strong>
                </p>
                ${syncedClientsList}
            </article>
            <section>
                <h4>${getText('sync_select_clients_title')}</h4>
                <div id="client-checkbox-list" style="margin-bottom: 1rem;">
                    ${clientListHTML}
                </div>
                <hr>
                <div class="grid">
                    <button class="btn" data-action="sync-clients">${getText('sync_action_btn')}</button>
                    <button data-action="sync-clear-device" class="btn btn-danger">${getText('sync_clear_btn')}</button>
                </div>
            </section>
        </article>
    `;
}
async function synchronizeClients() {
    const selectedClientIds = [...document.querySelectorAll('#client-checkbox-list input:checked')].map(cb => parseInt(cb.value, 10));
    if (selectedClientIds.length === 0) {
        alert(getText('sync_no_selection_alert'));
        return;
    }

    toggleModal(true);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<progress></progress>`;

    const status = await fetchDeviceStatus();
    
    let warnings = [];
    if (!status.bt_connected) warnings.push(getText('modal_warning_bt_disconnected'));
    if (status.m5_battery < 20) warnings.push(getText('modal_warning_device_low_battery'));
    if (status.hs_battery < 20) warnings.push(getText('modal_warning_headphone_low_battery'));

    const btStatusText = status.bt_connected 
        ? `${getText('modal_bt_connected')} (${status.bt_device_name})` 
        : getText('modal_bt_disconnected');
    
    const hsBatteryText = status.hs_battery !== null 
        ? status.hs_battery + '%' 
        : getText('modal_battery_unknown');

    let statusHTML = `
        <h4>${getText('modal_pre_activation_check_title')}</h4>
        <ul>
            <li>${status.bt_connected ? '✔' : '❌'} ${getText('modal_bt_status')}: ${btStatusText}</li>
            <li>${status.m5_battery >= 20 ? '✔' : '⚠'} ${getText('modal_device_battery')}: ${status.m5_battery}%</li>
            <li>${status.hs_battery >= 20 ? '✔' : '⚠'} ${getText('modal_headphone_battery')}: ${hsBatteryText}</li>
        </ul>
    `;

    if (warnings.length > 0) {
        statusHTML += `<p><strong>${getText('modal_warning_title')}</strong><br>${warnings.join('<br>')}</p>`;
    } else {
        statusHTML += `<p>✔ ${getText('modal_success_message')}</p>`;
    }

    statusHTML += `
        <div class="modal-actions">
            <button id="modal-cancel" class="btn btn-secondary">${getText('modal_button_cancel')}</button>
            <button id="modal-confirm" class="btn">${warnings.length > 0 ? getText('modal_button_activate_anyway') : getText('modal_button_activate')}</button>
        </div>
    `;

    modalContent.innerHTML = statusHTML;

    document.getElementById('modal-cancel').onclick = () => toggleModal(false);
    document.getElementById('modal-confirm').onclick = () => {
        const clientsToSync = mockClients.filter(client => selectedClientIds.includes(client.id));
        console.log("ADATKÜLDÉS AZ ESZKÖZRE:", JSON.stringify(clientsToSync));
        
        const activationDate = new Date();
        let endDate = new Date(activationDate);
        endDate.setDate(activationDate.getDate() + 10);

        mockDeviceState.lastSync = activationDate;
        mockDeviceState.trainingEndDate = endDate;
        mockDeviceState.syncedClients = clientsToSync.map(c => c.name);
        
        showNotification('sync_success_notification');
        toggleModal(false);
        renderActivatePage();
    };
}


function clearDeviceClients() {
    if (confirm(getText('sync_clear_confirm'))) {
        console.log("COMMAND TO ESP32: Clear clients.json from LittleFS");
        
        mockDeviceState.lastSync = null; // Visszaállítás null-ra
        mockDeviceState.syncedClients = [];
        mockDeviceState.trainingEndDate = null;
        
        showNotification('sync_cleared_notification');
        renderActivatePage();
    }
}
function renderLogPage() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <article>
            <header>
                <h2>${getText('log_title')}</h2>
                <p>${getText('log_instructions')}</p>
            </header>
            <div class="grid">
                <button class="btn" data-action="refresh-log">${getText('log_refresh_btn')}</button>
                <button class="btn btn-secondary" data-action="download-log">${getText('log_download_btn')}</button>
                <button class="btn btn-danger" data-action="clear-log">${getText('log_clear_btn')}</button>
            </div>
            <div id="log-container" style="margin-top: 1rem;">
            </div>
        </article>
    `;
    fetchAndDisplayLog();
}
function fetchAndDisplayLog() {
    const contentArea = document.getElementById('content-area');
    const logContainer = contentArea.querySelector('#log-container');
    if (!logContainer) return;

    const csvData = mockLogData;
    if (!csvData || csvData.trim() === '') {
        logContainer.innerHTML = `<p>A napló üres.</p>`;
        return;
    }

    const lines = csvData.trim().split('\n');
    const tableRows = lines.map(line => {
        const parts = line.split(';');
        const [timestamp, event, p1, p2, p3, p4] = parts;

        let details = '';
        switch(event) {
            case 'SESSION_START':
                details = `Kliens: ${p1}, Alk.: ${p2}, M5 Akku: ${p3}%, Fejhallgató Akku: ${p4}%`;
                break;
            case 'SESSION_END':
                details = `Állapot: ${p1}`;
                break;
            case 'BT_CONNECTED':
            case 'BT_DISCONNECTED':
                details = `Eszköz: ${p1}`;
                break;
            default:
                details = [p1, p2, p3, p4].filter(Boolean).join(', ');
        }

        return `<tr><td>${timestamp}</td><td>${event}</td><td>${details}</td></tr>`;
    }).join('');

    logContainer.innerHTML = `
        <table role="grid">
            <thead>
                <tr>
                    <th>${getText('log_table_header_time')}</th>
                    <th>${getText('log_table_header_event')}</th>
                    <th>${getText('log_table_header_details')}</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
    `;
}

function downloadLog() {
    const blob = new Blob([mockLogData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "ait-go-log.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function clearLog() {
    if (confirm(getText('log_clear_confirm'))) {
        console.log("COMMAND TO ESP32: Clear datalog.csv");
        mockLogData = "";
        showNotification('log_cleared_notification');
        fetchAndDisplayLog();
    }
}
function renderCalibrationPage() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <article>
            <header>
                <h2>${getText('calib_title')}</h2>
                <p>${getText('calib_instructions')}</p>
            </header>
            <div id="calib-workspace">
                <button class="btn" data-action="start-calibration">${getText('calib_start_btn')}</button>
            </div>
        </article>
    `;
}
function renderCalibWorkspace() {
    const workspace = document.getElementById('calib-workspace');
    if (!workspace) return;
    let tableRows = calibrationData.map(data => `<tr><td>${data.percent}%</td><td>${data.db} dB</td></tr>`).join('');
    let resultTableHTML = `
        <table role="grid">
            <thead>
                <tr>
                    <th>${getText('calib_table_header_percent')}</th>
                    <th>${getText('calib_table_header_db')}</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>`;
    if (currentCalibStepIndex < CALIB_STEPS.length) {
        const currentPercent = CALIB_STEPS[currentCalibStepIndex];
        console.log(`SIMULATING ESP32: Play white noise at ${currentPercent}%`);
        workspace.innerHTML = `
            <div class="grid">
                <article>
                    <header>
                        <strong>${getText('calib_step_title')} ${currentCalibStepIndex + 1}/${CALIB_STEPS.length}</strong>
                    </header>
                    <h3>${getText('calib_volume_level')}: ${currentPercent}%</h3>
                    <label for="db-input">${getText('calib_measured_db')}</label>
                    <input type="number" id="db-input" name="db-input" placeholder="pl. 75" required>
                    <button class="btn" data-action="record-calib-step">${getText('calib_record_btn')}</button>
                </article>
                <article>
                    ${resultTableHTML}
                </article>
            </div>
        `;
        document.getElementById('db-input').focus();
    } else {
        workspace.innerHTML = `
            <article>
                <header>
                    <strong>${getText('calib_complete_title')}</strong>
                </header>
                <p>${getText('calib_complete_text')}</p>
                ${resultTableHTML}
                <button class="btn" data-action="save-calibration">${getText('calib_finish_btn')}</button>
            </article>
        `;
    }
}
function startCalibration() {
    currentCalibStepIndex = 0;
    calibrationData = [];
    renderCalibWorkspace();
}

function recordCalibStep() {
    const measuredDbInput = document.getElementById('db-input');
    const measuredDb = parseInt(measuredDbInput.value, 10);

    if (isNaN(measuredDb)) {
        alert("Kérlek, adj meg egy érvényes számot!");
        return;
    }

    calibrationData.push({
        percent: CALIB_STEPS[currentCalibStepIndex],
        db: measuredDb
    });

    currentCalibStepIndex++;
    renderCalibWorkspace();
}

function saveCalibration() {
    console.log("SENDING TO ESP32 (NVS):", JSON.stringify(calibrationData));
    showNotification('calib_success_notification');
    renderCalibrationPage();
}
function renderCalibrationPage() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <article>
            <header><h2>${getText('calib_title')}</h2></header>
            <p>${getText('calib_instructions')}</p>
            <div id="calib-workspace">
                <button class="btn" data-action="start-calibration">${getText('calib_start_btn')}</button>
            </div>
        </article>
    `;
}

// --- CLIENT DATASHEET & SUB-COMPONENTS ---
const createSingleAudiogramHTML = (side, data) => {
    const freqLabelsHTML = AUDIOGRAM_FREQUENCIES.map(f => `<th>${f < 1000 ? f + ' Hz' : f/1000 + 'kHz'}</th>`).join('');
    const inputsHTML = data.map((val, i) => `
        <td>
            <div class="stepper-input vertical">
                <button type="button" class="stepper-btn stepper-up" aria-label="Érték növelése">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
                <input type="number" min="-10" max="120" step="5" value="${val}" id="audiogram-${side}-${i}" name="audiogram-${side}-${i}" data-side="${side}" data-index="${i}">
                <button type="button" class="stepper-btn stepper-down" aria-label="Érték csökkentése">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
            </div>
        </td>
    `).join('');
    
    return `
        <div class="audiogram-wrapper">
            <h4>${getText(side === 'l' ? 'left_ear' : 'right_ear')}</h4>
            <div class="audiogram-chart"><canvas id="audiogram-canvas-${side}"></canvas></div>
            <div class="audiogram-inputs-container">
                <h6>${getText('audiogram_input_title')}</h6>
                <table class="audiogram-input-table">
                    <thead>
                        <tr>${freqLabelsHTML}</tr>
                    </thead>
                    <tbody>
                        <tr>${inputsHTML}</tr>
                    </tbody>
                </table>
            </div>
        </div>`;
};

function createBasicInfoHTML(client) {
    return `
    <section>
        <h3>${getText('basic_info_title')}</h3>
        <div class="grid" style="grid-template-columns: 2fr 3fr;">
            <label>${getText('name_label')}
                <input name="client-name" type="text" value="${client.name || ''}" required>
            </label>
            
            <div class="grid">
                <label>${getText('dob_label')}
                    <input name="client-dob" type="date" value="${client.dob || ''}">
                </label>
                <label>${getText('age_label')}
                    <output id="client-age-display">${getText('age_not_specified')}</output>
                </label>
            </div>
        </div>
    </section>`;
}

function createDiagnosticsHTML(client) {
    return `
    <section>
        <h3>${getText('diagnostics_title')}</h3>
        <fieldset class="grid">
            <label><input name="diag-asd" type="checkbox" ${client.diagnostics.asd ? 'checked':''}> ${getText('asd_label')}</label>
            <label><input name="diag-stuttering" type="checkbox" ${client.diagnostics.stuttering ? 'checked':''}> ${getText('stuttering_label')}</label>
            <label><input id="diag-audiogram-checkbox" name="diag-audiogram" type="checkbox" ${client.diagnostics.hasAudiogram ? 'checked':''}> ${getText('audiogram_label')}</label>
        </fieldset>
    </section>`;
}

function createAudiogramSectionHTML(client, evaluationStatusHTML) {
    return `
    <section id="audiogram-section">
        <h3>${getText('audiogram_results_title')}</h3>
        <div class="audiogram-container">
            ${createSingleAudiogramHTML('r', client.audiogram.r)}
            ${createSingleAudiogramHTML('l', client.audiogram.l)}
        </div>
        <hr>
        <h4>${getText('evaluate_title')}</h4>
        <div id="audiogram-status" style="font-size: 0.85em; line-height: 1.6; min-height: 100px;">
            ${evaluationStatusHTML}
        </div>
    </section>`;
}

function createTrainingPlanHTML(client, statusMessage) {
    const filters = [1000, 1500, 2000, 3000, 4000, 8000];
    const planItemsHTML = client.trainings.map((sessionData, i) => {
        const volumeSummary = `<span style="color:var(--audiogram-right-color)">R:${sessionData.vr}dB</span> / <span style="color:var(--audiogram-left-color)">L:${sessionData.vl}dB</span>`;
        const activeFilters = filters.map((hz, idx) => sessionData.f[idx] ? (hz < 1000 ? hz : `${hz/1000}k`) : null).filter(Boolean).join(', ');
        const filterSummary = activeFilters ? `| ${getText('filters')}: ${activeFilters}` : '';
        const filterHTML = filters.map((hz, idx) => `<label><input type="checkbox" ${sessionData.f[idx] ? 'checked':''} data-session-index="${i}" data-filter-index="${idx}"> ${hz} Hz</label>`).join('');
        return `
        <div class="accordion-item">
            <div class="accordion-header">
                <span>${i + 1}. ${getText('session')}</span>
                <small class="summary-text">${volumeSummary} ${filterSummary}</small>
            </div>
            <div class="accordion-content">
                <label>${getText('volume_l')} (dB)</label>
                <div class="volume-control">
                    <input type="range" min="0" max="85" value="${sessionData.vl}"><input type="number" min="0" max="85" value="${sessionData.vl}">
                </div>
                <label>${getText('volume_r')} (dB)</label>
                <div class="volume-control">
                    <input type="range" min="0" max="85" value="${sessionData.vr}"><input type="number" min="0" max="85" value="${sessionData.vr}">
                </div>
                <fieldset>
                    <legend>${getText('filters')}</legend>
                    <div class="filter-grid">${filterHTML}</div>
                </fieldset>
            </div>
        </div>`;
    }).join('');
    return `
    <section>
        <h3>${getText('training_plan_title')}</h3>
        <div style="margin-bottom: 1.5rem;">
            <h4>${getText('plan_gen_title')}</h4>
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
                <button type="button" class="btn btn-secondary" data-action="generate-basic-plan" data-client-id="${client.id}">${getText('basic_btn')}</button>
                <button type="button" id="recommended-btn" class="btn btn-secondary" data-action="generate-recommended-plan" data-client-id="${client.id}" style="display: ${client.diagnostics.hasAudiogram ? 'inline-block' : 'none'}">${getText('recommended_btn')}</button>
            </div>
             <p><small id="recommendation-status">${statusMessage}</small></p>
        </div>
        ${planItemsHTML}
    </section>`;
}

function renderClientDatasheetPage(clientId, statusMessage = '', evaluationStatusHTML = '') {
    const isNewClient = clientId === 'new';
    let client;
    if (isNewClient) {
        if (!window.newClient) {
            window.newClient = { id: 'new', name:'', dob:'', diagnostics: { hasAudiogram: true }, audiogram: { l: Array(11).fill(0), r: Array(11).fill(0) }, trainings: Array.from({length: 20}, () => ({vl: 65, vr: 65, f:Array(6).fill(false)})) };
        }
        client = window.newClient;
    } else {
        client = mockClients.find(c => c.id == clientId);
    }
    if (!client) { renderPage('clients'); return; }
    currentPage = `datasheet_${client.id}`;

    // Kiértékelés futtatása oldalbetöltéskor (ha nem új kliens)
    if (!isNewClient && client.diagnostics.hasAudiogram) {
        const analysis = analyzeAudiogram(client);
        evaluationStatusHTML = generateEvaluationHTML(analysis);
    }
    
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
    <button class="btn btn-secondary back-button" onclick="renderPage('clients')">&lt; ${getText('back_btn')}</button>
    <form id="client-form" data-client-id="${client.id}" onsubmit="saveClient(event, '${isNewClient ? "new" : client.id}')">
        <article>
            <header><h2>${isNewClient ? getText('new_client_btn') : (client.name ? getText('datasheet_title') + ': ' + client.name : getText('datasheet_title'))}</h2></header>
            ${createBasicInfoHTML(client)}
            ${createDiagnosticsHTML(client)}
        </article>
        <article id="audiogram-article" style="display: ${client.diagnostics.hasAudiogram ? 'block' : 'none'}">
            ${createAudiogramSectionHTML(client, evaluationStatusHTML)}
        </article>
        <article>
            ${createTrainingPlanHTML(client, statusMessage)}
        </article>
        <article>
            <div class="grid">
                <button type="submit" id="save-button" class="btn">${getText('save_btn')}</button>
                <button type="button" class="btn btn-secondary" onclick="renderPage('clients')">${getText('cancel_btn')}</button>
                ${!isNewClient ? `<button type="button" class="btn btn-danger" data-action="delete-client" data-client-id="${client.id}">${getText('delete_btn')}</button>` : ''}
            </div>
        </article>
    </form>`;
    calculateAndDisplayAge(client.dob);
    if (client.diagnostics.hasAudiogram) {
        setTimeout(() => {
            drawAudiogram('l');
            drawAudiogram('r');
        }, 100);
    }
    setFormClean();
}

// --- CORE LOGIC ---
function syncClientObjectWithForm(client) {
    const form = document.getElementById('client-form');
    if (!form || !client) return;
    client.name = form.elements['client-name'].value;
    client.dob = form.elements['client-dob'].value;
    client.diagnostics.asd = form.elements['diag-asd'].checked;
    client.diagnostics.stuttering = form.elements['diag-stuttering'].checked;
    client.diagnostics.hasAudiogram = form.elements['diag-audiogram'].checked;
    if (client.diagnostics.hasAudiogram) {
        for(let i=0; i < AUDIOGRAM_FREQUENCIES.length; i++) {
            client.audiogram.l[i] = parseInt(form.elements[`audiogram-l-${i}`].value, 10);
            client.audiogram.r[i] = parseInt(form.elements[`audiogram-r-${i}`].value, 10);
        }
    }
}
function analyzeAudiogram(client) {
    const rightEarData = client.audiogram.r;
    const leftEarData = client.audiogram.l;
    
    const sumR = rightEarData.reduce((a, b) => a + b, 0);
    const avgR = (sumR / rightEarData.length).toFixed(1);
    const sumL = leftEarData.reduce((a, b) => a + b, 0);
    const avgL = (sumL / leftEarData.length).toFixed(1);

    const freqs = [125, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
    const R = {}, L = {};
    freqs.forEach((freq, index) => { R[freq] = rightEarData[index]; L[freq] = leftEarData[index]; });

    const ptaR = ((R[500] || 0) + (R[1000] || 0) + (R[2000] || 0)) / 3;
    const ptaL = ((L[500] || 0) + (L[1000] || 0) + (L[2000] || 0)) / 3;

    const sensitivityPointsR = rightEarData.filter(db => db < 0).length;
    const sensitivityPointsL = leftEarData.filter(db => db < 0).length;

    const medicalWarningNeeded = rightEarData.some(db => db > 25) || leftEarData.some(db => db > 25);

    const peaks = {
        R8000: R[8000] <= R[6000] - 5, L8000: L[8000] <= L[6000] - 5,
        R2000: (R[2000] <= R[1500] - 5) && (R[2000] <= R[3000] - 5), L2000: (L[2000] <= L[1500] - 5) && (L[2000] <= L[3000] - 5),
        R1500: (R[1500] <= R[1000] - 10) && (R[1500] <= R[2000] - 10), L1500: (L[1500] <= L[1000] - 10) && (L[1500] <= L[2000] - 10),
        R3000: (R[3000] <= R[2000] - 10) && (R[3000] <= R[4000] - 10), L3000: (L[3000] <= L[2000] - 10) && (L[3000] <= L[4000] - 10),
        R1000: (R[1000] <= R[750] - 10) && (R[1000] <= R[1500] - 10), L1000: (L[1000] <= L[750] - 10) && (L[1000] <= L[1500] - 10)
    };
    
    const rightPeakFrequencies = [];
    if (peaks.R1000) rightPeakFrequencies.push(1000);
    if (peaks.R1500) rightPeakFrequencies.push(1500);
    if (peaks.R2000) rightPeakFrequencies.push(2000);
    if (peaks.R3000) rightPeakFrequencies.push(3000);
    if (peaks.R8000) rightPeakFrequencies.push(8000);

    const leftPeakFrequencies = [];
    if (peaks.L1000) leftPeakFrequencies.push(1000);
    if (peaks.L1500) leftPeakFrequencies.push(1500);
    if (peaks.L2000) leftPeakFrequencies.push(2000);
    if (peaks.L3000) leftPeakFrequencies.push(3000);
    if (peaks.L8000) leftPeakFrequencies.push(8000);

    const hasPeakAt = { p1000: peaks.R1000 || peaks.L1000, p1500: peaks.R1500 || peaks.L1500, p2000: peaks.R2000 || peaks.L2000, p3000: peaks.R3000 || peaks.L3000, p8000: peaks.R8000 || peaks.L8000 };
    const totalPeakCount = Object.values(hasPeakAt).filter(Boolean).length;

    return { avgR, avgL, ptaR, ptaL, sensitivityPointsR, sensitivityPointsL, medicalWarningNeeded, rightPeakCount: rightPeakFrequencies.length, leftPeakCount: leftPeakFrequencies.length, rightPeakFrequencies, leftPeakFrequencies, totalPeakCount, hasPeakAt, rawPeaks: peaks };
}
function generateEvaluationHTML(analysis) {
    if (!analysis) return '';

    let evaluationHTML = '';
    const dominantEar = parseFloat(analysis.avgL) < parseFloat(analysis.avgR) ? getText('left_ear_eval') : getText('right_ear_eval');
    evaluationHTML += `<p><strong>${getText('dominance_title')}:</strong> ${dominantEar} (J: ${analysis.avgR} dB, B: ${analysis.avgL} dB)</p>`;
    
    const rightPeakStr = analysis.rightPeakCount > 0 ? ` (${analysis.rightPeakFrequencies.join(' Hz, ')} Hz)` : '';
    const leftPeakStr = analysis.leftPeakCount > 0 ? ` (${analysis.leftPeakFrequencies.join(' Hz, ')} Hz)` : '';
    evaluationHTML += `<p><strong>${getText('peaks_short')}:</strong> ${getText('right_ear_eval')}: ${analysis.rightPeakCount}${rightPeakStr}. ${getText('left_ear_eval')}: ${analysis.leftPeakCount}${leftPeakStr}.</p>`;
    
    evaluationHTML += `<p><strong>${getText('pta_title')}:</strong> ${getText('right_ear_eval')}: ${analysis.ptaR.toFixed(1)} dB, ${getText('left_ear_eval')}: ${analysis.ptaL.toFixed(1)} dB.</p>`;

    if (analysis.medicalWarningNeeded) {
        evaluationHTML += `<p style="color:var(--danger-color); font-weight: bold; margin-top: 0.5rem;">${getText('medical_warning')}</p>`;
    }
    return evaluationHTML;
}
function evaluateAudiogram(clientId) {
    const client = (clientId === 'new') ? window.newClient : mockClients.find(c => c.id == clientId);
    if (!client) return;
    
    syncClientObjectWithForm(client);
    const analysis = analyzeAudiogram(client);
    const evaluationHTML = generateEvaluationHTML(analysis);
    
    const statusP = document.getElementById('audiogram-status');
    if(statusP) statusP.innerHTML = evaluationHTML;
}

function generateBasicPlan(clientId) {
    const client = (clientId === 'new') ? window.newClient : mockClients.find(c => c.id == clientId);
    if (!client) return;

    syncClientObjectWithForm(client);

    const currentEvalHTML = document.getElementById('audiogram-status')?.innerHTML || '';

    // --- JAVÍTOTT HANGERŐ LOGIKA KEZDETE ---

    // 1. Alapértelmezettként beállítjuk a progresszív hangerőt.
    client.trainings.forEach((session, index) => {
        session.vl = BASIC_VOLUME_SCHEDULE[index];
        session.vr = BASIC_VOLUME_SCHEDULE[index];
    });

    // 2. Biztonságosan kiszámoljuk az életkort.
    let age = 99; // Alapértelmezetten felnőttnek tekintjük, ha nincs dátum.
    if (client.dob) {
        const birthDate = new Date(client.dob);
        if (!isNaN(birthDate.getTime())) { 
            const ageDifMs = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDifMs);
            age = Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    }

    // 3. Felülírjuk 65 dB-re, ha a speciális feltételek (kisgyerek vagy autizmus) teljesülnek.
    if (age <= 5 || client.diagnostics.asd) {
        client.trainings.forEach(session => {
            session.vl = 65;
            session.vr = 65;
        });
        console.log("--> Alapbeállítás: Kor (<=5) vagy autizmus miatt hangerő 65 dB-re állítva.");
    }
    
    // --- JAVÍTOTT HANGERŐ LOGIKA VÉGE ---

    // A szűrőket minden esetben kikapcsoljuk alapbeállításnál.
    client.trainings.forEach(session => {
        session.f.fill(false);
    });

    showNotification('basic_plan_applied');
    renderClientDatasheetPage(clientId, '', currentEvalHTML);
    setFormDirty();
}

function generateRecommendedPlan(clientId) {
    const client = (clientId === 'new') ? window.newClient : mockClients.find(c => c.id == clientId);
    if (!client) return;

    syncClientObjectWithForm(client);
    
    if (!client.diagnostics.hasAudiogram) {
        alert(getText('recommendation_requires_audiogram'));
        return;
    }

    const currentEvalHTML = document.getElementById('audiogram-status')?.innerHTML || '';
    const analysis = analyzeAudiogram(client);
    
    console.log(`--- "Ajánlott Beállítás" Algoritmus Indul: ${client.name} ---`);

    let volumeMessage = '';
    let stutteringMessage = ''; // <-- 1. ÚJ VÁLTOZÓ

    // Hangerő logika (változatlan)
    client.trainings.forEach((session, index) => {
        session.vl = BASIC_VOLUME_SCHEDULE[index];
        session.vr = BASIC_VOLUME_SCHEDULE[index];
    });
    let age = 99;
    if (client.dob) {
        const birthDate = new Date(client.dob);
        if (!isNaN(birthDate.getTime())) { 
            const ageDifMs = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDifMs);
            age = Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    }
    if (age <= 5 || client.diagnostics.asd) {
        client.trainings.forEach(session => {
            session.vl = 65;
            session.vr = 65;
        });
        volumeMessage = getText('volume_set_for_age_asd');
        console.log("--> Kor (<=5) vagy autizmus miatt hangerő 65 dB-re állítva.");
    }
    
    // Szűrő logika (változatlan)
    const filtersToSet = [false, false, false, false, false, false];
    let filterMessage = getText('no_filter_needed');
    if (analysis.totalPeakCount >= 4) {
        if (analysis.hasPeakAt.p2000 && analysis.hasPeakAt.p8000) {
            filtersToSet[2] = true;
            filtersToSet[5] = true;
            filterMessage = `${getText('filters_set')} 2000 Hz, 8000 Hz. ${getText('training_repeat_recommended')}`;
        }
    } else {
        if (analysis.hasPeakAt.p8000) {
            const potentialPartners = [
                { freq: 2000, priority: 4, score: (analysis.rawPeaks.L2000 ? 2 : 0) + (analysis.rawPeaks.R2000 ? 1 : 0) },
                { freq: 1500, priority: 3, score: (analysis.rawPeaks.L1500 ? 2 : 0) + (analysis.rawPeaks.R1500 ? 1 : 0) },
                { freq: 3000, priority: 2, score: (analysis.rawPeaks.L3000 ? 2 : 0) + (analysis.rawPeaks.R3000 ? 1 : 0) },
                { freq: 1000, priority: 1, score: (analysis.rawPeaks.L1000 ? 2 : 0) + (analysis.rawPeaks.R1000 ? 1 : 0) }
            ].filter(p => p.score > 0);
            if (potentialPartners.length > 0) {
                filtersToSet[5] = true;
                potentialPartners.sort((a, b) => b.score - a.score || b.priority - a.priority);
                const bestPartner = potentialPartners[0];
                const filterIndexMap = { 1000: 0, 1500: 1, 2000: 2, 3000: 3, 4000: 4, 8000: 5 };
                filtersToSet[filterIndexMap[bestPartner.freq]] = true;
                filterMessage = `${getText('filters_set')} ${bestPartner.freq} Hz, 8000 Hz`;
            }
        }
    }
    
    client.trainings.forEach(session => { session.f = [...filtersToSet]; });

    // Beszédzavar logika BŐVÍTÉSE
    if (client.diagnostics.stuttering) {
        for (let i = 10; i < 20; i++) {
            client.trainings[i].vl = Math.round(client.trainings[i].vr * 0.7);
        }
        stutteringMessage = getText('stuttering_volume_reduction'); // <-- 2. ÜZENET BEÁLLÍTÁSA
        console.log("--> Beszédzavar miatt a 11. alkalomtól a bal hangerő csökkentve.");
    }

    // A végleges üzenet összeállítása
    const finalMessage = [volumeMessage, filterMessage, stutteringMessage].filter(Boolean).join(' '); // <-- 3. ÚJ ÜZENET HOZZÁADVA

    showNotification('recommendation_generated');
    renderClientDatasheetPage(clientId, finalMessage, currentEvalHTML);
    setFormDirty();
}

function analyzeAudiogram(client) {
    const rightEarData = client.audiogram.r;
    const leftEarData = client.audiogram.l;
    
    const sumR = rightEarData.reduce((a, b) => a + b, 0);
    const avgR = (sumR / rightEarData.length).toFixed(1);
    const sumL = leftEarData.reduce((a, b) => a + b, 0);
    const avgL = (sumL / leftEarData.length).toFixed(1);

    const freqs = [125, 250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
    const R = {}, L = {};
    freqs.forEach((freq, index) => { R[freq] = rightEarData[index]; L[freq] = leftEarData[index]; });

    const ptaR = ((R[500] || 0) + (R[1000] || 0) + (R[2000] || 0)) / 3;
    const ptaL = ((L[500] || 0) + (L[1000] || 0) + (L[2000] || 0)) / 3;

    const sensitivityPointsR = rightEarData.filter(db => db < 0).length;
    const sensitivityPointsL = leftEarData.filter(db => db < 0).length;

    const medicalWarningNeeded = rightEarData.some(db => db > 25) || leftEarData.some(db => db > 25);

    const peaks = {
        R8000: R[8000] <= R[6000] - 5, L8000: L[8000] <= L[6000] - 5,
        R2000: (R[2000] <= R[1500] - 5) && (R[2000] <= R[3000] - 5), L2000: (L[2000] <= L[1500] - 5) && (L[2000] <= L[3000] - 5),
        R1500: (R[1500] <= R[1000] - 10) && (R[1500] <= R[2000] - 10), L1500: (L[1500] <= L[1000] - 10) && (L[1500] <= L[2000] - 10),
        R3000: (R[3000] <= R[2000] - 10) && (R[3000] <= R[4000] - 10), L3000: (L[3000] <= L[2000] - 10) && (L[3000] <= L[4000] - 10),
        R1000: (R[1000] <= R[750] - 10) && (R[1000] <= R[1500] - 10), L1000: (L[1000] <= L[750] - 10) && (L[1000] <= L[1500] - 10)
    };
    
    const rightPeakFrequencies = [];
    if (peaks.R1000) rightPeakFrequencies.push(1000);
    if (peaks.R1500) rightPeakFrequencies.push(1500);
    if (peaks.R2000) rightPeakFrequencies.push(2000);
    if (peaks.R3000) rightPeakFrequencies.push(3000);
    if (peaks.R8000) rightPeakFrequencies.push(8000);

    const leftPeakFrequencies = [];
    if (peaks.L1000) leftPeakFrequencies.push(1000);
    if (peaks.L1500) leftPeakFrequencies.push(1500);
    if (peaks.L2000) leftPeakFrequencies.push(2000);
    if (peaks.L3000) leftPeakFrequencies.push(3000);
    if (peaks.L8000) leftPeakFrequencies.push(8000);

    const hasPeakAt = { p1000: peaks.R1000 || peaks.L1000, p1500: peaks.R1500 || peaks.L1500, p2000: peaks.R2000 || peaks.L2000, p3000: peaks.R3000 || peaks.L3000, p8000: peaks.R8000 || peaks.L8000 };
    const totalPeakCount = Object.values(hasPeakAt).filter(Boolean).length;

    // EZ A SOR HIÁNYZOTT VALÓSZÍNŰLEG:
    return { avgR, avgL, ptaR, ptaL, sensitivityPointsR, sensitivityPointsL, medicalWarningNeeded, rightPeakCount: rightPeakFrequencies.length, leftPeakCount: leftPeakFrequencies.length, rightPeakFrequencies, leftPeakFrequencies, totalPeakCount, hasPeakAt, rawPeaks: peaks };
}

function saveClient(event, clientId) {
    event.preventDefault();
    const isNewClient = clientId === 'new';
    let clientToSave = isNewClient ? window.newClient : mockClients.find(c => c.id == clientId);
    if(!clientToSave) return;
    syncClientObjectWithForm(clientToSave);
    const form = event.target;
    for (let i = 0; i < 20; i++) {
        const sessionContainer = form.querySelectorAll('.accordion-item')[i];
        const [vlInput, vrInput] = sessionContainer.querySelectorAll('.volume-control input[type="number"]');
        clientToSave.trainings[i].vl = parseInt(vlInput.value, 10);
        clientToSave.trainings[i].vr = parseInt(vrInput.value, 10);
        const filterCheckboxes = sessionContainer.querySelectorAll('.filter-grid input[type="checkbox"]');
        filterCheckboxes.forEach((cb, filterIndex) => {
            clientToSave.trainings[i].f[filterIndex] = cb.checked;
        });
    }
    showNotification('save_success');
    if (isNewClient) {
        clientToSave.id = mockClients.length > 0 ? Math.max(...mockClients.map(c => c.id)) + 1 : 0;
        mockClients.push(JSON.parse(JSON.stringify(clientToSave)));
        delete window.newClient;
        setFormClean(); 
        renderPage(`datasheet_${clientToSave.id}`);
    } else {
        setFormClean();
    }
}

function deleteClient(clientId) {
    if (clientId === 'new' || !confirm(getText('delete_confirm'))) {
        return;
    }
    mockClients = mockClients.filter(c => c.id !== clientId);
    showNotification('delete_success');
    renderPage('clients');
}

function updateClock() {
    const clockElement = document.getElementById('header-clock');
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    const contentArea = document.getElementById('content-area');

    // Nyelvválasztó a láblécben
    document.querySelector('.sidebar-footer').addEventListener('click', (event) => {
        const langButton = event.target.closest('.lang-button');
        if (langButton && langButton.dataset.lang !== currentLang) {
            changeLanguage(langButton.dataset.lang);
        }
    });
    
    // Fő navigáció az oldalsávban
    document.getElementById('main-nav').addEventListener('click', (event) => {
        event.preventDefault();
        const navLink = event.target.closest('a');
        if (navLink) {
            const pageId = navLink.id.substring('nav-'.length);
            renderPage(pageId, navLink);
        }
    });

    // Fő 'click' eseménykezelő a tartalom területen
    contentArea.addEventListener('click', (event) => {
        const target = event.target;
        
        // Audiogram léptető gombok (+/-)
        const stepperButton = target.closest('.stepper-btn');
        if (stepperButton) {
            const stepper = stepperButton.parentElement;
            const input = stepper.querySelector('input[type="number"]');
            if (!input) return;

            let currentValue = parseInt(input.value, 10);
            const step = parseInt(input.step, 10) || 5;
            const min = parseInt(input.min, 10);
            const max = parseInt(input.max, 10);

            if (stepperButton.classList.contains('stepper-up')) {
                currentValue = Math.min(max, currentValue + step);
            } else if (stepperButton.classList.contains('stepper-down')) {
                currentValue = Math.max(min, currentValue - step);
            }
            
            input.value = currentValue;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            return; 
        }

        // Oldalváltó gombok (pl. "Szerkesztés", "Új kliens")
        const pageButton = target.closest('button[data-page-id]');
        if (pageButton) {
            const pageId = pageButton.dataset.pageId;
            if (pageId === 'datasheet_new') {
                window.newClient = null;
            }
            renderPage(pageId);
            return;
        }

        // Accordion (lenyíló) fejlécek
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            accordionHeader.nextElementSibling.classList.toggle('active');
            return;
        }
        
        // Minden egyéb 'data-action' gomb (Mentés, Törlés, Kiértékelés, stb.)
        const actionButton = target.closest('button[data-action]');
        if (actionButton) {
            const action = actionButton.dataset.action;
            const clientIdRaw = actionButton.dataset.clientId;
            const clientId = (clientIdRaw === 'new') ? 'new' : parseInt(clientIdRaw, 10);
            
            const actions = {
                'evaluate-audiogram': () => evaluateAudiogram(clientId),
                'generate-basic-plan': () => generateBasicPlan(clientId),
                'generate-recommended-plan': () => generateRecommendedPlan(clientId),
                'delete-client': () => deleteClient(clientId),
                'start-calibration': () => startCalibration(),
                'record-calib-step': () => recordCalibStep(),
                'save-calibration': () => saveCalibration(),
                'refresh-log': () => fetchAndDisplayLog(),
                'download-log': () => downloadLog(),
                'clear-log': () => clearLog(),
                'sync-clients': () => synchronizeClients(),
                'sync-clear-device': () => clearDeviceClients(),
            };
            if (actions[action]) {
                actions[action]();
            }
        }
    });

    // Fő 'input' eseménykezelő a tartalom területen (gépelés, csúszka húzás, stb.)
    contentArea.addEventListener('input', (event) => {
        setFormDirty();
        const target = event.target;
        
        if (target.id === 'diag-audiogram-checkbox') {
            const form = target.closest('form');
            const clientId = form.dataset.clientId;
            const client = (clientId === 'new') ? window.newClient : mockClients.find(c => c.id == clientId);
            if (client) {
                client.diagnostics.hasAudiogram = target.checked;
                renderClientDatasheetPage(clientId);
            }
        } else if (target.name === 'client-dob') {
            calculateAndDisplayAge(target.value);
        } else if (target.closest('.audiogram-inputs-container')) {
            const input = target.closest('input[type="number"]');
            if (input) {
                const value = parseInt(input.value, 10);
                const step = parseInt(input.step, 10) || 5;
                if (!isNaN(value)) {
                    const roundedValue = Math.round(value / step) * step;
                    if (value !== roundedValue) {
                        input.value = roundedValue;
                    }
                }
                const side = input.dataset.side;
                if (side) drawAudiogram(side);
                const form = target.closest('form');
                const clientId = form.dataset.clientId;
                evaluateAudiogram(clientId);
            }
        } else {
            const accordionItem = target.closest('.accordion-item');
            if (accordionItem) {
                if (target.closest('.volume-control')) {
                    const parent = target.closest('.volume-control');
                    const slider = parent.querySelector('input[type="range"]');
                    const number = parent.querySelector('input[type="number"]');
                    if (slider && number) {
                        slider.value = target.value;
                        number.value = target.value;
                    }
                }
                updateAccordionHeader(accordionItem);
            }
        }
    });
}


// --- MAIN APP INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    populateLanguageSelector();
    setupEventListeners();
    renderPage('clients', document.getElementById('nav-clients'));

    updateClock();
    setInterval(updateClock, 1000); 

    // EZ AZ ÚJ SOR:
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
});