import React from 'react'
import { motion } from 'framer-motion'
import { certification } from '../data/content'
import { span } from 'framer-motion/client'

const Certification = () => {
    return (
        <div>
            <section id='certfication' className='px-6 py-24 border-t border-line'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10'>
                    <p className='font-mono text-xs text-accent tracking-wide'>05 / CERTIFICATES</p>
                    <div className='grid gap-5'>
                        {
                            certification.map((e, i) => {
                                return (<motion.div
                                    key={e.role + e.org}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className='border border-line rounded-lg p-6'
                                >
                                    <div className='flex flex-wrap items-baseline justify-between gap-2 mb-1'>
                                        <h3 className='font-display font-semibold text-base'>{e.name}</h3>
                                    </div>
                                    <p className='text-accent text-sm mb-3'>{e.issuer}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {e.skills.map((items) => {
                                            return (<span className='font-mono text-[11px] text-text bg-bg border border-line rounded px-2.5 py-1 pb-1'>{items}</span>
                                            )
                                        })}
                                    </div>
                                    <a href={e.credentialUrl} target='_blank' className='text-[11.5px] hover:underline text-accent transition pt-1'>View Certificate</a>
                                </motion.div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Certification
