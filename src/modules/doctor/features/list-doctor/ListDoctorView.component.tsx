import React from 'react'
import { ListDoctorTable } from './component/list-doctor-table/ListDoctorTable.component'
import { ListDoctorActions } from './component/list-doctor-actions/ListDoctorActions.component'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer.component'
import { Flex } from 'antd'

export const ListDoctorView = () => {
  
  return (
    <BaseContainer>
      <Flex vertical gap={24}>
        <ListDoctorActions />
        <ListDoctorTable />
      </Flex>
    </BaseContainer>
  )
}
