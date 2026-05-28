import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SectionDescription from '../common/SectionDescription';

export default function MeetupExplanation() {
    return (
        <div className="flex flex-col items-center text-center my-10">
            <SectionTitle>O que é o WebTech Meetup?</SectionTitle>
            <div className="max-w-4xl px-4 mt-6">
                <SectionDescription>
                    O WebTech Meetup é um encontro da comunidade criado para fomentar discussões, compartilhar conhecimento e fortalecer o networking entre profissionais, estudantes e entusiastas de tecnologia.
                </SectionDescription>
            </div>
        </div>
    );
}
