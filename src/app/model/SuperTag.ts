export interface SuperTag {
    id_tag:           number 
    nom_tag:          string
    url_icon:         string | null
    idt_folder_file:  1 | 2
    id_tag_pai:       number | null
}
export type SuperTags = SuperTag[]