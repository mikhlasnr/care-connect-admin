'use client'

import { Button, Flex } from 'antd'
import React, { useState } from 'react'
import { DoctorForm } from '../doctor-form/DoctorForm.component'

export const ListDoctorActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showDoctorFrom = () => {
    setIsModalOpen(true)
  }
  return (
    <>
      <Flex justify="flex-end">
        <Button onClick={showDoctorFrom}>Tambah Dokter</Button>
      </Flex>
      <DoctorForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}
