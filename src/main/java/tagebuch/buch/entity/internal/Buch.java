package tagebuch.buch.entity.internal;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tagebuch_buch")
public class Buch implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "buchseq")
    private int BuchId;
    private String name;
    //TODO Einträge??

}
