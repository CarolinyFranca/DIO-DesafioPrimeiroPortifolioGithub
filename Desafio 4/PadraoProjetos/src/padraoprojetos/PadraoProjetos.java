/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package padraoprojetos;

/**
 *
 * @author franc
 */
public class PadraoProjetos {

    /**
     * @param args the command line arguments
     */
    private static class InstanceHolder {
        public static PadraoProjetos instancia = new PadraoProjetos();
    }
    
    private PadraoProjetos(){
        super();
    }
    
    public static PadraoProjetos getInstancia(){
        return InstanceHolder.instancia;
    }
}
