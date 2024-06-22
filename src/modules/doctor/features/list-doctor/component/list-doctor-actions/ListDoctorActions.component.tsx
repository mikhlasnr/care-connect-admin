'use client'

import { Button, Flex } from 'antd'
import React, { useState } from 'react'
import { DoctorForm } from '../doctor-form/DoctorForm.component'
import { useAppDispatch } from '@/store/store'
import { toggleShowDoctorForm } from '@/store/docter/docter.reducer'

export const ListDoctorActions = () => {
  const dispatch = useAppDispatch()
  const handleShowDoctorForm = () => {
    dispatch(toggleShowDoctorForm())
  }
  return (
    <>
      <Flex justify="flex-end">
        <Button onClick={handleShowDoctorForm}>Tambah Dokter</Button>
      </Flex>
      <DoctorForm />
    </>
  )
}
