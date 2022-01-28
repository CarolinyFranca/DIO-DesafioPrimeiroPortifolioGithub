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
public class Cachorro implements Animal{

    @Override
    public void mover() {
        System.out.println("O cachorro anda");
    }

    @Override
    public String falar() {
        
        return "O cahorro late";
    }

   
}
