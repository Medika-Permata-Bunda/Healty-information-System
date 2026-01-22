'use client'
import Modal from "@/components/Modal/primary";
import { JSX, useRef, useState } from "react";
import { Post } from "../action";
import Input from "@/components/Input/Primary";
import { useClickOutside } from "@/hooks/useClickOutside";
import { PatientRequest } from "@/types/patient/request";

export default function ModalRegister({onClose}: {onClose: () => void}): JSX.Element {

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => onClose());

  const [patientRequest, setPatientRequest] = useState<PatientRequest>({ medical_record:"", name:"", birth_place:"", birth_date:"", gender:"laki-laki", blood_type:"A", education:"SMA", religion:"islam", wedding:"menikah", nik:"", bpjs:"", email:"", phone_number:"", parent_name:"", parent_relation:"ibu", full_address:"", village:0, district:0, regencie:0, province:0 })

  async function createPatient() {
    const data = await Post(patientRequest)
    console.log(data)
  }

  return (
    <Modal>
      <div ref={ref} className="w-[95%] h-[90%] bg-background border border-(--line) rounded-2xl flex overflow-y-scroll slide-down">
        <div className="w-30%">
          <button onClick={() => close()}>Close</button>
        </div>
        <div className="w-70% grid grid-cols-2">
          <Input label="Nomor Rekam Medis">
            <input type="text" value={patientRequest.medical_record} onChange={(e) => setPatientRequest((prev) => ({...prev, medical_record: e.target.value}))} />
          </Input>
          <Input label="Nama">
            <input type="text" value={patientRequest.name} onChange={(e) => setPatientRequest((prev) => ({...prev, name: e.target.value}))} />
          </Input>
          <Input label="Tempat & Tanggal lahir">
            <input type="text" value={patientRequest.birth_place} onChange={(e) => setPatientRequest((prev) => ({...prev, birth_place: e.target.value}))} />  
            <input type="date" value={patientRequest.birth_date} onChange={(e) => setPatientRequest((prev) => ({...prev, birth_date: e.target.value}))} />
          </Input>       
          <Input label="Jenis kelamin">
            <select value={patientRequest.gender} onChange={(e) => setPatientRequest((prev) => ({...prev, gender: e.target.value as "laki-laki" | "perempuan"}))}>
              <option value="laki-laki">Laki - laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </Input>
          <Input label="Golongan darah">
            <select value={patientRequest.blood_type} onChange={(e) => setPatientRequest((prev) => ({...prev, blood_type: e.target.value as "A" | "B" | "AB" | "O"}))}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
          </Input>
          <Input label="Agama">
            <select value={patientRequest.religion} onChange={(e) => setPatientRequest((prev) => ({...prev, religion: e.target.value as "islam" |"kristen" | "katolik" | "hindu" | "budha" | "koghucu"}))}>
              <option value="islam">Islam</option>
              <option value="kristen">Kristen</option>
              <option value="katolik">Katolik</option>
              <option value="hindu">Hindu</option>
              <option value="budha">Budha</option>
              <option value="konghucu">Konghucu</option>
            </select>
          </Input>
          <Input label="Pendidikan">
            <select value={patientRequest.education} onChange={(e) => setPatientRequest((prev) => ({...prev, education: e.target.value as "SD" | "SMP" | "SMA" | "D1" | "D2" | "D3" | "D4" | "S1" | "S2" | "S3"}))}>
              <option value="SD">SD</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
              <option value="D1">D1</option>
              <option value="D2">D2</option>
              <option value="D3">D3</option>
              <option value="D4">D4</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
            </select>
          </Input>
          <Input label="Pernikahan">
            <select value={patientRequest.wedding} onChange={(e) => setPatientRequest((prev) => ({...prev, wedding: e.target.value as "menikah" | "belum menikah" | "janda" | "dudha"}))}>
              <option value="menikah">Menikah</option>
              <option value="belum menikah">Belum menikah</option>
              <option value="janda">Janda</option>
              <option value="dudha">Dudha</option>
            </select>
          </Input>
          <Input label="NIK">
            <input type="text" value={patientRequest.nik} onChange={(e) => setPatientRequest((prev) => ({...prev, nik: e.target.value}))} />
          </Input>
          <Input label="BPJS">
            <input type="text" value={patientRequest.bpjs} onChange={(e) => setPatientRequest((prev) => ({...prev, bpjs: e.target.value}))} />
          </Input>
          <Input label="Email">
            <input type="email" value={patientRequest.email} onChange={(e) => setPatientRequest((prev) => ({...prev, email: e.target.value}))} />
          </Input>
          <Input label="Nomor telepon">
            <input type="text" value={patientRequest.phone_number} onChange={(e) => setPatientRequest((prev) => ({...prev, phone_number: e.target.value}))} />
          </Input>
          <Input label="Nama orang tua">
            <input type="text" value={patientRequest.parent_name} onChange={(e) => setPatientRequest((prev) => ({...prev, parent_name: e.target.value}))} />
          </Input>
          <Input label="Hubungan">
            <select value={patientRequest.parent_relation} onChange={(e) => setPatientRequest((prev) => ({...prev, parent_relation: e.target.value as "ayah" | "ibu"}))}>
              <option value="ayah">Ayah</option>
              <option value="ibu">Ibu</option>
            </select>
          </Input>
          <Input label="Alamat lengkap">
            <textarea value={patientRequest.full_address} onChange={(e) => setPatientRequest((prev) => ({...prev, full_address: e.target.value}))} />
          </Input>
          <Input label="Kelurahan">
            <input type="number" value={patientRequest.village} onChange={(e) => setPatientRequest((prev) => ({...prev, village: parseInt(e.target.value)}))} />
          </Input>
          <Input label="Kecamatan">
            <input type="number" value={patientRequest.district} onChange={(e) => setPatientRequest((prev) => ({...prev, district: parseInt(e.target.value)}))} />
          </Input>
          <Input label="Kabupaten">
            <input type="number" value={patientRequest.regencie} onChange={(e) => setPatientRequest((prev) => ({...prev, regencie: parseInt(e.target.value)}))} />
          </Input>
          <Input label="Provinsi">
            <input type="number" value={patientRequest.province} onChange={(e) => setPatientRequest((prev) => ({...prev, province: parseInt(e.target.value)}))} />
          </Input>
          <button onClick={() => createPatient()}>Simpan</button>
        </div>
      </div>
    </Modal>
  )
}