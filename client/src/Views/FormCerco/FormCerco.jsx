import React, { useState } from "react";
import NavBar from "../../Componentes/NavBar/NavBar";
const FormCerco = () => {
  const [selectedHorario, setSelectedHorario] = useState(null);

  const handleHorarioClick = (horario) => {
    setSelectedHorario(horario);
  };

  const handleSubmit = (event) => {
    alert("enviado");
    event.preventDefault();
  };
  return (
    <div>
      <NavBar/>
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <form
          action="https://formbold.com/s/FORM_ID"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="fName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="lName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="fEmail"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="fEmail"
                  id="fEmail"
                  placeholder="Email"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="lCelular"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Celular
                </label>
                <input
                  type="text"
                  name="lCelular"
                  id="lCelular"
                  placeholder="Celular"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="fProvincia"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Provincia
                </label>
                <input
                  type="text"
                  name="fProvincia"
                  id="fProvincia"
                  placeholder="Provincia"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="lDepartamento"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Departamento
                </label>
                <input
                  type="text"
                  name="lDepartamento"
                  id="lDepartamento"
                  placeholder="Departamento"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div class="mb-5">
            <label
              for="dirección"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Dirección
            </label>
            <input
              type="text"
              name="dirección"
              id="dirección"
              placeholder="5"
              min="0"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="fAlto"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Alto
                </label>
                <input
                  type="number"
                  name="fAlto"
                  id="fAlto"
                  placeholder="Alto"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="lAncho"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Ancho
                </label>
                <input
                  type="number"
                  name="lAncho"
                  id="lAncho"
                  placeholder="Ancho"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            <label className="block font-medium mb-2">Tipo de Cañas</label>
            <div className="flex space-x-2">
              <button
                type="button"
                className={`w-20 h-20 border border-gray-300 rounded ${
                  selectedHorario === "mañana"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => handleHorarioClick("mañana")}
              >
                Mañana
              </button>
              <button
                type="button"
                className={`w-20 h-20 border border-gray-300 rounded ${
                  selectedHorario === "tarde"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => handleHorarioClick("tarde")}
              >
                Tarde
              </button>
              <button
                type="button"
                className={`w-20 h-20 border border-gray-300 rounded ${
                  selectedHorario === "noche"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => handleHorarioClick("noche")}
              >
                Noche
              </button>
            </div>
          </div>
          <div class="mb-5">
            <label
              for="especificaciones"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Especificaciones
            </label>
            <textarea
              name="especificaciones"
              id="especificaciones"
              rows="4" 
              placeholder="Ingrese las especificaciones aquí"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="date"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="time"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div class="mb-5">
            <label class="mb-3 block text-base font-medium text-[#07074D]">
              Are you coming to the event?
            </label>
            <div class="flex items-center space-x-6">
              <div class="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  class="h-5 w-5"
                />
                <label
                  for="radioButton1"
                  class="pl-3 text-base font-medium text-[#07074D]"
                >
                  Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton2"
                  class="h-5 w-5"
                />
                <label
                  for="radioButton2"
                  class="pl-3 text-base font-medium text-[#07074D]"
                >
                  No
                </label>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FormCerco;
