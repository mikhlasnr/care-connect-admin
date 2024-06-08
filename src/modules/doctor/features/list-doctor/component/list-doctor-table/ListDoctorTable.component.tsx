'use client'

import React from 'react'
import { Button, Popconfirm, Space, Table, Tag, Tooltip, message } from 'antd'
import type { PopconfirmProps, TableProps } from 'antd'
import { DoctorProps } from './ListDoctorTable.type'
import { doctorsListData } from './ListDoctorTable.utils'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Link from 'next/link'

export const ListDoctorTable = () => {
  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e)
    message.success('Data Berhasil Dihapus')
  }

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e)
  }

  const columns: TableProps<DoctorProps>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (value, record) => (
        <Link href={`doctor/${record.id}`}>{value}</Link>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Poli',
      dataIndex: 'categoryPoli',
      key: 'categoryPoli',
    },
    {
      width: 80,
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Ubah">
            <Button icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip title="Hapus">
            <Popconfirm
              title="Hapus akun dokter"
              description="Apakah Anda yakin ingin menghapus akun dokter ini?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Hapus"
              cancelText="Batal"
            >
              <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ]

  return <Table columns={columns} dataSource={doctorsListData} />
}
