/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projetopoli;

/**
 *
 * @author Rodrigo
 */
public class ProjetoPoli {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       Cachorro c = new Cachorro();
        // retorno da função
       String s = c.falar();
        System.out.println("s: "+s);
        c.mover();
        
    }
    
}
