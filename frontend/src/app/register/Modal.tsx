import Modal from "@/components/Modal/primary";
import { JSX } from "react";

interface Child {
    close: () => void
}

export default function ModalRegister({close}: Child): JSX.Element {
    return (
      <Modal>
        <div className="w-[95%] h-[95vh] rounded-xl border border-(--line) bg-(--secondary) overflow-scroll">
          <div className="grid grid-cols-4">
            <div className="border-r border-(--line)">
                <h1 className="m-2">Input data pasien</h1>
                <button className="m-1 py-1 px-3 bg-green-500 rounded-md" onClick={close}>Save</button>
                <button className="m-1 py-1 px-3 bg-red-500 rounded-md" onClick={close}>Close</button>
            </div>
            {/* Presonal data */}
            <div>
              <div className="m-2 text-(--font)">
                <p>Rekam Medis</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Nama pasien</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Tempat & tgl lahir</p>
                <div className="flex">
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
                  <input type="date" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" />
                </div>
              </div>
              <div className="m-2 text-(--font)">
                <p>Jenis kelamin</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">Laki - laki</option>
                  <option value="">Perempuan</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Golongan darah</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Pendidikan</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Agama</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Status nikah</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Suku/bangsa</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Bahasa dipakai</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Cacat fisik</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
            </div>
            {/* Presonal data */}
            {/* address */}
            <div>
              <div className="m-2 text-(--font)">
                <p>Nama ibu</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Penanggung jawab</p>
                <select className="border border-(--line) px-2 py-1 rounded-md w-full">
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">AB</option>
                  <option value="">O</option>
                </select>
              </div>
              <div className="m-2 text-(--font)">
                <p>Nama penanggung jawab</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Pekerjaan penanggung jawab</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Alamat</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
                <div className="flex mt-1">
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" />
                </div>
                <div className="flex mt-1">
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" />
                </div>
              </div>
              <div className="m-2 text-(--font)">
                <p>Alamat penanggung jawab</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
                <div className="flex mt-1">
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" />
                </div>
                <div className="flex mt-1">
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
                  <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full ml-1" />
                </div>
              </div>
            </div>
            {/* address */}
            {/* Administration */}
            <div>
              <div className="m-2 text-(--font)">
                <p>Nomor NIK</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Nomor Peserta</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Email</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Nomor Telepon</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Pekerjaan</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
              <div className="m-2 text-(--font)">
                <p>Instansi</p>
                <input type="text" className="border border-(--line) px-2 py-1 rounded-md w-full" />
              </div>
            </div>
            {/* Administration */}
          </div>
        </div>
      </Modal>
    )
  }