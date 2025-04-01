
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { ServiceItem } from '@/components/ServiceSummaryTable';

const AdminServices = () => {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const [services, setServices] = useState<ServiceItem[]>([
    {
      id: 1,
      description: "Pembersihan Malware Website",
      quantity: "14 website",
      unitPrice: 250000,
      subtotal: 3500000
    },
    {
      id: 2,
      description: "Pengecekan Sistem cPanel",
      quantity: "1 layanan",
      unitPrice: 150000,
      subtotal: 150000
    },
    {
      id: 3,
      description: "Setup Server VPS Baru",
      quantity: "2 layanan",
      unitPrice: 300000,
      subtotal: 600000
    }
  ]);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newService, setNewService] = useState<Partial<ServiceItem>>({
    description: '',
    quantity: '',
    unitPrice: 0,
    subtotal: 0
  });

  const handleAddService = () => {
    if (!newService.description || !newService.quantity || !newService.unitPrice) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const subtotal = Number(newService.unitPrice) * (Number(newService.quantity) || 1);
    
    const serviceToAdd: ServiceItem = {
      id: Math.max(0, ...services.map(s => s.id)) + 1,
      description: newService.description,
      quantity: newService.quantity,
      unitPrice: Number(newService.unitPrice),
      subtotal: subtotal
    };

    setServices([...services, serviceToAdd]);
    setNewService({
      description: '',
      quantity: '',
      unitPrice: 0,
      subtotal: 0
    });
    
    setIsDialogOpen(false);
    
    toast({
      title: "Service Added",
      description: "The new service has been successfully added."
    });
  };

  const handleEditService = () => {
    if (!editingService) return;
    
    setServices(services.map(service => 
      service.id === editingService.id ? editingService : service
    ));
    
    setEditingService(null);
    setIsDialogOpen(false);
    
    toast({
      title: "Service Updated",
      description: "The service has been successfully updated."
    });
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
    
    toast({
      title: "Service Deleted",
      description: "The service has been successfully removed."
    });
  };

  const openAddDialog = () => {
    setEditingService(null);
    setNewService({
      description: '',
      quantity: '',
      unitPrice: 0,
      subtotal: 0
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (service: ServiceItem) => {
    setEditingService(service);
    setIsDialogOpen(true);
  };

  const totalAmount = services.reduce((total, item) => total + item.subtotal, 0);

  return (
    <div className="section-container py-12">
      <Button 
        variant="outline" 
        onClick={() => navigate('/dashboard')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Kembali ke Dashboard
      </Button>
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Kelola Layanan</h1>
          <p className="text-muted-foreground">
            Tambah, edit, atau hapus layanan aktif Anda
          </p>
        </div>
        <Button 
          onClick={openAddDialog}
          className="mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Tambah Layanan Baru
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Layanan Aktif</CardTitle>
          <CardDescription>
            Total {services.length} layanan dengan nilai Rp {totalAmount.toLocaleString('id-ID')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3">Deskripsi</th>
                  <th className="text-left p-3">Kuantitas</th>
                  <th className="text-left p-3">Harga Satuan</th>
                  <th className="text-right p-3">Subtotal</th>
                  <th className="text-right p-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">{service.description}</td>
                    <td className="p-3">{service.quantity}</td>
                    <td className="p-3">Rp {service.unitPrice.toLocaleString('id-ID')}</td>
                    <td className="p-3 text-right">Rp {service.subtotal.toLocaleString('id-ID')}</td>
                    <td className="p-3 text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => openEditDialog(service)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteService(service.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Perubahan layanan akan direfeksikan pada invoice berikutnya
            </p>
          </div>
          <Button 
            variant="outline"
            onClick={() => navigate('/admin/purchases')}
          >
            Lihat Invoice
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {editingService ? 'Edit Layanan' : 'Tambah Layanan Baru'}
            </DialogTitle>
            <DialogDescription>
              {editingService 
                ? 'Ubah detail layanan sesuai kebutuhan' 
                : 'Masukkan detail layanan baru yang akan ditambahkan'}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Deskripsi
              </Label>
              <Input
                id="description"
                placeholder="Masukkan deskripsi layanan"
                className="col-span-3"
                value={editingService ? editingService.description : newService.description}
                onChange={(e) => {
                  if (editingService) {
                    setEditingService({...editingService, description: e.target.value});
                  } else {
                    setNewService({...newService, description: e.target.value});
                  }
                }}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Kuantitas
              </Label>
              <Input
                id="quantity"
                placeholder="e.g., 2 website, 1 layanan"
                className="col-span-3"
                value={editingService ? editingService.quantity : newService.quantity}
                onChange={(e) => {
                  if (editingService) {
                    setEditingService({...editingService, quantity: e.target.value});
                  } else {
                    setNewService({...newService, quantity: e.target.value});
                  }
                }}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Harga Satuan
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g., 250000"
                className="col-span-3"
                value={editingService ? editingService.unitPrice : newService.unitPrice}
                onChange={(e) => {
                  const value = parseFloat(e.target.value) || 0;
                  if (editingService) {
                    const subtotal = value * (parseFloat(editingService.quantity) || 1);
                    setEditingService({
                      ...editingService, 
                      unitPrice: value,
                      subtotal: subtotal
                    });
                  } else {
                    setNewService({
                      ...newService, 
                      unitPrice: value
                    });
                  }
                }}
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={editingService ? handleEditService : handleAddService}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {editingService ? 'Save Changes' : 'Add Service'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminServices;
